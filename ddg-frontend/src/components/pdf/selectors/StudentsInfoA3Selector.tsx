import {
  Alert,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import dayjs from "dayjs";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useTranslate, type Identifier } from "react-admin";
import { useMeasure } from "react-use";
import { PdfFileType } from "../../../hooks/usePdfFormData";
import {
  PdfA3Info_pdf_write,
  PdfStudent_pdf_write,
  PdfTrainingPeriod_pdf_write,
  type PdfCompanyTutor_pdf_write,
} from "../../../services/openapi";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { A3InfoRadio } from "./inputs/A3InfoRadio";
import { A3InfoTrainingIntervalRadio } from "./inputs/A3InfoTrainingIntervalRadio";
import { A3TrainingPeriods } from "./inputs/A3TrainingPeriods";
import { AssessmentComments } from "./inputs/AssessmentComments";
import { CopyButton } from "./inputs/CopyButton";
import { StudentInfoDate } from "./inputs/StudentInfoDate";

export type StudentInfos = Map<Identifier, PdfStudent_pdf_write>;

export const StudentsInfoA3Selector = () => {
  const t = useTranslate();
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const { markStepCompleted, formData, setPartial, studentList } =
    usePdfWizardContext();

  const [studentInfos, setStudentInfos] = useState<StudentInfos>(
    new Map(
      formData?.students?.map((studentInfo) => [
        studentInfo.id || "",
        studentInfo,
      ]),
    ),
  );

  const includeA3Fields = useRef<boolean>(
    formData.fileType === PdfFileType.FFE_ANEXO3_PLAN ||
      formData.includeRelated?.some(
        (item) => item === PdfFileType.FFE_ANEXO3_PLAN,
      )
      ? true
      : false,
  );

  const includeSeguimiento = useRef<boolean>(
    formData.fileType === PdfFileType.FFE_ANEXO_SEGUIMIENTO ||
      formData.includeRelated?.some(
        (item) => item === PdfFileType.FFE_ANEXO_SEGUIMIENTO,
      )
      ? true
      : false,
  );

  const includeValoracion = useRef<boolean>(
    formData.fileType === PdfFileType.FFE_ANEXO_VALORACION_FINAL ||
      formData.includeRelated?.some(
        (item) => item === PdfFileType.FFE_ANEXO_VALORACION_FINAL,
      )
      ? true
      : false,
  );

  useEffect(() => {
    if (formData.students && formData.students.length !== studentInfos.size) {
      const studentInfos = new Map();
      formData.students.forEach((student) => {
        if (!studentInfos.has(student.id)) {
          studentInfos.set(student.id, {
            id: student.id,
            a3Info: student.a3Info || copyA3InfoValues({}),
            trainingPeriods: [],
            comments: "",
          });
        }
      });
      setStudentInfos(new Map(studentInfos));
    }
  }, [formData.students, studentInfos]);

  useEffect(() => {
    setPartial({ students: Array.from(studentInfos.values()) || [] });
  }, [studentInfos, setPartial]);

  useEffect(() => {
    const isComplete = formData.students?.every(
      (student: PdfStudent_pdf_write) => {
        return (
          (!includeA3Fields.current ||
            (student.id &&
              student.totalHours &&
              student.a3Info?.disabilityMeasures !== null &&
              student.a3Info?.extraordinaryAuthorization !== null &&
              student.a3Info?.multipleCompanies !== null &&
              student.a3Info?.trainingInterval)) &&
          (!includeSeguimiento.current ||
            (student.periodFrom && student.periodTo))
        );
      },
    );
    markStepCompleted(isComplete);
  }, [formData, markStepCompleted]);

  const setInfo = (
    key: keyof PdfStudent_pdf_write,
    id: Identifier,
    value:
      | string
      | number
      | null
      | PdfA3Info_pdf_write
      | PdfTrainingPeriod_pdf_write[]
      | PdfCompanyTutor_pdf_write,
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
    key: keyof PdfStudent_pdf_write,
    value:
      | string
      | number
      | null
      | PdfA3Info_pdf_write
      | PdfTrainingPeriod_pdf_write[]
      | PdfCompanyTutor_pdf_write,
  ) => {
    studentInfos.forEach((studentInfo) => {
      studentInfo.id && setInfo(key, studentInfo.id, value);
    });
  };

  const setAllInfos = (studentInfo: PdfStudent_pdf_write | null) => {
    if (!studentInfo) {
      return;
    }

    Object.keys(studentInfo).forEach((key) => {
      if (key !== "id" && key != "@id") {
        const value = studentInfo[key as keyof PdfStudent_pdf_write];
        setAllInfo(key as keyof PdfStudent_pdf_write, value || "");
      }
    });
  };

  const setInfoValue = (
    info: PdfStudent_pdf_write,
    key: keyof PdfStudent_pdf_write,
    value:
      | string
      | number
      | null
      | PdfA3Info_pdf_write
      | PdfTrainingPeriod_pdf_write[]
      | PdfCompanyTutor_pdf_write,
  ) => {
    if (key === "id") {
      info[key] = value as string;
    } else if (
      key === "totalHours" ||
      key === "weeklyHours" ||
      key === "dailyHours"
    ) {
      info[key] = (value ? Number(value) : null) as number | null;
    } else if (key == "a3Info") {
      info[key] = value ? copyA3InfoValues(value as PdfA3Info_pdf_write) : null;
    } else if (key == "trainingPeriods") {
      info[key] = value as PdfTrainingPeriod_pdf_write[] | undefined;
    } else {
      info[key] = value as string | null;
    }
  };

  const copyA3InfoValues = (
    a3Info: PdfA3Info_pdf_write,
  ): PdfA3Info_pdf_write => {
    return {
      disabilityMeasures: a3Info.disabilityMeasures || false,
      disabilityMeasuresComments: a3Info.disabilityMeasuresComments,
      extraordinaryAuthorization: a3Info.extraordinaryAuthorization || false,
      extraordinaryAuthorizationComments:
        a3Info.extraordinaryAuthorizationComments,
      multipleCompanies: a3Info.multipleCompanies || false,
      trainingInterval:
        a3Info.trainingInterval || PdfA3Info_pdf_write.trainingInterval.OTHER,
      specificTrainingComments: a3Info.specificTrainingComments || "",
      obsAssessment: a3Info.obsAssessment || "",
      obsPerformance: a3Info.obsPerformance || "",
      obsTutor: a3Info.obsTutor || "",
    };
  };

  const setA3Info = (a3Info: PdfA3Info_pdf_write, id: Identifier) => {
    setInfo("a3Info", id, a3Info);
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
              <TableCell sx={{ minWidth: "200px" }}>
                {t("resources.students.fields.document")}
              </TableCell>
              {includeSeguimiento.current && (
                <>
                  <TableCell sx={{ minWidth: "250px" }}>
                    {t("resources.pdf_downloads.fields.students.periodFrom")}
                  </TableCell>
                  <TableCell sx={{ minWidth: "250px" }}>
                    {t("resources.pdf_downloads.fields.students.periodTo")}
                  </TableCell>
                </>
              )}
              {includeA3Fields.current && (
                <>
                  <TableCell sx={{ minWidth: "200px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.a3Info.disabilityMeasures",
                    )}
                  </TableCell>
                  <TableCell sx={{ minWidth: "200px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.a3Info.extraordinaryAuthorization",
                    )}
                  </TableCell>
                  <TableCell sx={{ minWidth: "200px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.a3Info.multipleCompanies",
                    )}
                  </TableCell>
                  <TableCell sx={{ minWidth: "150px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.a3Info.trainingInterval",
                    )}
                  </TableCell>
                  <TableCell sx={{ minWidth: "100px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.a3Info.totalHours",
                    )}
                  </TableCell>
                  <TableCell sx={{ minWidth: "100px" }}>
                    {t(
                      "resources.pdf_downloads.fields.students.trainingPeriods.title",
                    )}
                  </TableCell>
                </>
              )}
              {includeValoracion.current && (
                <TableCell>
                  {t("resources.pdf_downloads.fields.students.comments")}
                </TableCell>
              )}
              <TableCell></TableCell>
              {studentInfos.size > 1 && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentInfos.size === studentList.length &&
              studentList?.map((student) => {
                const info: PdfStudent_pdf_write = studentInfos.get(
                  student.id || "",
                ) || { id: student["@id"] || "" };
                info.a3Info = info.a3Info || copyA3InfoValues({});
                info.trainingPeriods = info.trainingPeriods || [];
                info.totalHours = info.totalHours || 0;
                info.comments = info.comments || "";
                return (
                  <TableRow
                    key={student.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{student.fullName}</TableCell>
                    <TableCell>{student.document}</TableCell>

                    {includeSeguimiento.current && (
                      <>
                        <TableCell>
                          <StudentInfoDate
                            fieldName="periodFrom"
                            student={student}
                            setInfo={setInfo}
                            setAllInfo={setAllInfo}
                            studentInfos={studentInfos}
                          />
                        </TableCell>
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
                      </>
                    )}
                    {includeA3Fields.current && (
                      <>
                        <TableCell>
                          <A3InfoRadio
                            value={info?.a3Info?.disabilityMeasures}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.disabilityMeasures =
                                e.target.value === "true";
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                            showMessage={
                              info?.a3Info?.disabilityMeasures === true
                            }
                            messageValue={
                              info?.a3Info?.disabilityMeasuresComments
                            }
                            onBlurMessage={(message) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.disabilityMeasuresComments = message;
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                            messageLabel={t(
                              "resources.pdf_downloads.fields.students.a3Info.disabilityMeasuresComments",
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <A3InfoRadio
                            value={info?.a3Info?.extraordinaryAuthorization}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.extraordinaryAuthorization =
                                e.target.value === "true";
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                            showMessage={
                              info?.a3Info?.extraordinaryAuthorization === true
                            }
                            messageValue={
                              info?.a3Info?.extraordinaryAuthorizationComments
                            }
                            onBlurMessage={(message) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.extraordinaryAuthorizationComments =
                                message;
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                            messageLabel={t(
                              "resources.pdf_downloads.fields.students.a3Info.extraordinaryAuthorizationComments",
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <A3InfoRadio
                            value={info?.a3Info?.multipleCompanies}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.multipleCompanies =
                                e.target.value === "true";
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                            showMessage={false}
                          />
                        </TableCell>
                        <TableCell>
                          <A3InfoTrainingIntervalRadio
                            value={info?.a3Info?.trainingInterval}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.trainingInterval = e.target
                                .value as PdfA3Info_pdf_write.trainingInterval;
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            value={info.totalHours}
                            size="small"
                            type="number"
                            InputProps={{
                              inputProps: { min: 1 },
                            }}
                            onChange={(
                              e: ChangeEvent<
                                HTMLInputElement | HTMLTextAreaElement
                              >,
                            ) => {
                              setInfo(
                                "totalHours",
                                student["@id"] || "",
                                e.target.value,
                              );
                            }}
                          />
                        </TableCell>

                        <TableCell sx={{ textAlign: "center" }}>
                          <A3TrainingPeriods
                            maxItems={6}
                            trainingPeriods={info.trainingPeriods}
                            comments={info.comments}
                            specificTrainingComments={
                              info.a3Info.specificTrainingComments
                            }
                            titleInfo={student.fullName}
                            onChange={(
                              trainingPeriods:
                                | PdfTrainingPeriod_pdf_write[]
                                | null,
                              comments: string,
                              specificTrainingComments:
                                | string
                                | null
                                | undefined,
                            ) => {
                              setInfo(
                                "trainingPeriods",
                                student["@id"] || "",
                                trainingPeriods,
                              );
                              setInfo(
                                "comments",
                                student["@id"] || "",
                                comments,
                              );
                              info.a3Info = info.a3Info || copyA3InfoValues({});
                              info.a3Info.specificTrainingComments =
                                specificTrainingComments;
                              setA3Info(info.a3Info, student["@id"] || "");
                            }}
                          />
                        </TableCell>
                      </>
                    )}
                    {includeValoracion.current && (
                      <TableCell>
                        <AssessmentComments
                          student={info}
                          titleInfo={
                            <>
                              {t(
                                "resources.pdf_downloads.fields.students.comments",
                              )}
                              {" - "}
                              {t(
                                "pages.pdf.document_names." + formData.fileType,
                              )}
                              {" - "}
                              <b>{student.fullName}</b>
                            </>
                          }
                          onChange={(assesmentStudent) => {
                            if (assesmentStudent.a3Info) {
                              setA3Info(
                                assesmentStudent?.a3Info,
                                student["@id"] || "",
                              );
                            }
                            setInfo(
                              "comments",
                              student?.["@id"] || "",
                              assesmentStudent?.comments || "",
                            );
                          }}
                        />
                      </TableCell>
                    )}
                    {studentInfos.size > 1 && (
                      <TableCell>
                        <CopyButton
                          color="primary"
                          title={t("pages.pdf.copy_all_to_all")}
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
