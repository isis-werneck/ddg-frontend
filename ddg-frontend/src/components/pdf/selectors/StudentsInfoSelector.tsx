import {
  Alert,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDataProvider, useTranslate, type Identifier } from "react-admin";
import { useMeasure } from "react-use";
import {
  Company_jsonld_company_read_timestamps,
  PdfStudent_pdf_write,
  type PdfCompanyTutor_pdf_write,
} from "../../../services/openapi";
import { DialogMultiSelectButton } from "../../custom/resource_multi_select/DialogMultiSelectButton";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";
import { CopyButton } from "./inputs/CopyButton";
import { DialogCompanyTutor } from "./inputs/DialogCompanyTutor";
import { Show } from "./inputs/Show";
import { StudentInfoDate } from "./inputs/StudentInfoDate";
import { StudentInfoText } from "./inputs/StudentInfoText";
import { StudentInfoTime } from "./inputs/StudentInfoTime";

export type OmitPdfStudentInfo = Omit<
  PdfStudent_pdf_write,
  "trainingPeriods" | "a3Info"
>;

export type StudentInfos = Map<Identifier, OmitPdfStudentInfo>;

export const StudentsInfoSelector = () => {
  const t = useTranslate();
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const { markStepCompleted, formData, setPartial, studentList } =
    usePdfWizardContext();
  const dataProvider = useDataProvider();

  const [studentInfos, setStudentInfos] = useState<StudentInfos>(
    new Map(
      formData?.students?.map((studentInfo) => [
        studentInfo.id || "",
        studentInfo,
      ]),
    ),
  );

  const [studentCompanies, setStudentCompanies] = useState<
    Company_jsonld_company_read_timestamps[][]
  >(formData?.students?.map(() => []) || [[]]);

  const { isShown, required } = useSelectorContext();

  useEffect(() => {
    if (formData.students && formData.students.length !== studentInfos.size) {
      const studentInfos = new Map();
      formData.students.forEach((student) => {
        if (!studentInfos.has(student.id)) {
          studentInfos.set(student.id, {
            id: student.id,
          });
        }
      });
      setStudentInfos(new Map(studentInfos));
    }
  }, [formData.students, studentInfos]);

  useEffect(() => {
    const companyIds: string[] = (
      formData.students?.map((student) => student.company || "") || []
    ).filter((id) => !!id);

    if (companyIds.length) {
      dataProvider
        .getMany("companies", {
          ids: companyIds,
        })
        .then((response) => {
          const companies: Array<
            Array<Company_jsonld_company_read_timestamps>
          > = [];
          formData.students?.forEach((student, idx) => {
            companies[idx] = [];
            response.data.forEach((company) => {
              if (company["@id"] === student.company) {
                companies[idx] = companies[idx] || [];
                companies[idx].push(company);
              }
            });
          });
          setStudentCompanies(companies);
        });
    }
  }, [dataProvider, formData.students]);

  useEffect(() => {
    setPartial({ students: Array.from(studentInfos.values()) || [] });
  }, [setPartial, studentInfos]);

  useEffect(() => {
    const isComplete = formData.students?.every((student) => {
      const requiredKeys = required || Object.keys(student);
      return (
        requiredKeys.every((key) => {
          return (
            !isShown(key as keyof OmitPdfStudentInfo) ||
            !!student[key as keyof OmitPdfStudentInfo]
          );
        }) &&
        (!isShown("companyTutor") ||
          (!!student.companyTutor?.name && !!student.companyTutor?.lastName))
      );
    });
    markStepCompleted(isComplete);
  }, [formData.students, required, isShown, markStepCompleted]);

  const setInfo = (
    key: keyof OmitPdfStudentInfo,
    id: Identifier,
    value: string | number | null | PdfCompanyTutor_pdf_write,
  ) => {
    const info = studentInfos.get(id);

    if (info) {
      setInfoValue(info, key, value);
      studentInfos.set(id, info);
      setStudentInfos(new Map(studentInfos));
      setPartial({
        students: Array.from(studentInfos.values()),
      });
    }
  };

  const setAllInfo = (
    key: keyof OmitPdfStudentInfo,
    value: string | number | null | PdfCompanyTutor_pdf_write,
  ) => {
    studentInfos.forEach((studentInfo) => {
      setInfo(key, studentInfo.id || "", value);
    });
  };

  const setAllInfos = (studentInfo: PdfStudent_pdf_write | null) => {
    if (!studentInfo) {
      return;
    }

    Object.keys(studentInfo).forEach((key) => {
      if (key !== "id" && key != "@id") {
        setAllInfo(
          key as keyof OmitPdfStudentInfo,
          studentInfo[key as keyof OmitPdfStudentInfo] || "",
        );
      }
    });
  };

  const setInfoValue = (
    info: OmitPdfStudentInfo,
    key: keyof OmitPdfStudentInfo,
    value: string | number | null | PdfCompanyTutor_pdf_write,
  ) => {
    if (key === "id") {
      info[key] = value as string;
    } else if (
      key === "totalHours" ||
      key === "weeklyHours" ||
      key === "dailyHours"
    ) {
      info[key] = (value ? Number(value) : null) as number | null;
    } else {
      info[key] = value as string | null;
    }
  };

  if (!studentList?.length) {
    return (
      <Alert severity="warning">{t("pages.pdf.no_students_selected")}</Alert>
    );
  }

  return (
    <Box ref={ref}>
      <Box sx={{ overflowX: "auto", width: width }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: "200px" }}>
                {t("resources.students.fields.fullName")}
              </TableCell>
              <TableCell>{t("resources.students.fields.document")}</TableCell>

              <Show when="company">
                <TableCell>
                  {t("resources.pdf_downloads.fields.students.company")}
                </TableCell>
              </Show>
              <Show when="companyTutor">
                <TableCell>
                  {t("resources.pdf_downloads.fields.students.companyTutor")}
                </TableCell>
              </Show>
              <Show when="periodFrom">
                <TableCell sx={{ minWidth: "250px" }}>
                  {t("resources.pdf_downloads.fields.students.periodFrom")}
                </TableCell>
              </Show>
              <Show when="periodTo">
                <TableCell sx={{ minWidth: "250px" }}>
                  {t("resources.pdf_downloads.fields.students.periodTo")}
                </TableCell>
              </Show>
              <Show when="hoursAndDays">
                <TableCell sx={{ minWidth: "150px" }}>
                  {t("resources.pdf_downloads.fields.students.hoursAndDays")}
                </TableCell>
              </Show>
              <Show when="weeklyHours">
                <TableCell sx={{ minWidth: "125px" }}>
                  {t("resources.pdf_downloads.fields.students.weeklyHours")}
                </TableCell>
              </Show>
              <Show when="startTime">
                <TableCell sx={{ minWidth: "210px" }}>
                  {t("resources.pdf_downloads.fields.students.startTime")}
                </TableCell>
              </Show>
              <Show when="endTime">
                <TableCell sx={{ minWidth: "210px" }}>
                  {t("resources.pdf_downloads.fields.students.endTime")}
                </TableCell>
              </Show>
              <Show when="dailyHours">
                <TableCell sx={{ minWidth: "125px" }}>
                  {t("resources.pdf_downloads.fields.students.dailyHours")}
                </TableCell>
              </Show>
              <Show when="totalHours">
                <TableCell sx={{ minWidth: "125px" }}>
                  {t("resources.pdf_downloads.fields.students.totalHours")}
                </TableCell>
              </Show>
              {studentInfos.size > 1 && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.students?.map((info, idx) => {
              const student = studentList.find(
                (student) => student.id === info.id,
              );
              if (!student) {
                return null;
              }
              return (
                <TableRow
                  key={student.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{student.fullName}</TableCell>
                  <TableCell>{student.document}</TableCell>
                  <Show when="company">
                    <TableCell>
                      <Stack direction={"column"} gap={1} alignItems={"center"}>
                        <Stack direction="row" gap={1}>
                          <DialogMultiSelectButton<Company_jsonld_company_read_timestamps>
                            caption={
                              t("pages.pdf.company_select") +
                              " - " +
                              student.fullName
                            }
                            buttonProps={{
                              title: t("pages.pdf.company_select"),
                              color: studentCompanies[idx]?.length
                                ? "success"
                                : "primary",
                              variant: "contained",
                            }}
                            resourceSelectProps={{
                              filterFields: ["name", "nif"],
                              resource: "companies",
                              selectOne: true,
                              setSelectedItems: (value) => {
                                studentCompanies[idx] = value;
                                setStudentCompanies(studentCompanies);
                                setInfo(
                                  "company",
                                  student.id || "",
                                  value?.[0]?.["@id"] || "",
                                );
                              },
                              selectedItems: studentCompanies[idx],
                              fields: [
                                "name",
                                "nif",
                                "address",
                                "agreementCode",
                              ],
                              listProps: {
                                storeKey: "company_student_" + student.id,
                              },
                            }}
                          />
                          <CopyButton
                            disabled={!studentCompanies[idx]?.length}
                            onClick={() => {
                              setAllInfo(
                                "company",
                                studentCompanies[idx][0]["@id"] || "",
                              );
                            }}
                          />
                        </Stack>
                        {studentCompanies[idx]?.[0] && (
                          <Typography variant="caption" textAlign={"center"}>
                            <small>{studentCompanies[idx]?.[0].name}</small>
                          </Typography>
                        )}
                      </Stack>
                    </TableCell>
                  </Show>

                  <Show when="companyTutor">
                    <TableCell>
                      <DialogCompanyTutor
                        student={info}
                        fields={["name", "lastName"]}
                        titleInfo={
                          <>
                            {t(
                              "resources.pdf_downloads.fields.students.companyTutor",
                            )}
                            {" - "}
                            {t("pages.pdf.document_names." + formData.fileType)}
                            {" - "}
                            <b>{student.fullName}</b>
                          </>
                        }
                        onChange={(student) =>
                          setInfo(
                            "companyTutor",
                            student.id || "",
                            student.companyTutor || null,
                          )
                        }
                      />
                    </TableCell>
                  </Show>
                  <Show when="periodFrom">
                    <TableCell>
                      <StudentInfoDate
                        fieldName="periodFrom"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                      />
                    </TableCell>
                  </Show>
                  <Show when="periodTo">
                    <TableCell>
                      <StudentInfoDate
                        fieldName="periodTo"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                        minDate={dayjs(
                          studentInfos.get(student.id || "")?.periodFrom,
                          "YYYY-MM-DD",
                        )}
                        disabled={
                          !studentInfos.get(student.id || "")?.periodFrom
                        }
                      />
                    </TableCell>
                  </Show>
                  <Show when="hoursAndDays">
                    <TableCell>
                      <StudentInfoText
                        fieldName="hoursAndDays"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                      />
                    </TableCell>
                  </Show>
                  <Show when="weeklyHours">
                    <TableCell>
                      <StudentInfoText
                        fieldName="weeklyHours"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                        type="number"
                        InputProps={{
                          inputProps: { min: 1 },
                        }}
                      />
                    </TableCell>
                  </Show>
                  <Show when="startTime">
                    <TableCell>
                      <StudentInfoTime
                        fieldName="startTime"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                      />
                    </TableCell>
                  </Show>
                  <Show when="endTime">
                    <TableCell>
                      <StudentInfoTime
                        fieldName="endTime"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                        disabled={
                          !studentInfos.get(student.id || "")?.startTime
                        }
                        minTime={dayjs(
                          studentInfos.get(student.id || "")?.startTime,
                          "HH:mm",
                        )}
                      />
                    </TableCell>
                  </Show>
                  <Show when="dailyHours">
                    <TableCell>
                      <StudentInfoText
                        fieldName="dailyHours"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                        type="number"
                        InputProps={{
                          inputProps: { min: 1 },
                        }}
                      />
                    </TableCell>
                  </Show>
                  <Show when="totalHours">
                    <TableCell>
                      <StudentInfoText
                        fieldName="totalHours"
                        student={student}
                        setInfo={setInfo}
                        setAllInfo={setAllInfo}
                        studentInfos={studentInfos}
                        type="number"
                        InputProps={{
                          inputProps: { min: 1 },
                        }}
                      />
                    </TableCell>
                  </Show>
                  {studentInfos.size > 1 && (
                    <TableCell>
                      <CopyButton
                        color="primary"
                        onClick={() => {
                          setAllInfos(
                            studentInfos.get(student.id || "") || null,
                          );
                        }}
                      ></CopyButton>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
