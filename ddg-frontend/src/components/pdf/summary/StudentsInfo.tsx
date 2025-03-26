import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { Show } from "../selectors/inputs/Show";
import dayjs from "dayjs";
import { useMeasure } from "react-use";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useTranslate } from "react-admin";

export const StudentsInfo = () => {
  const t = useTranslate();
  const { formData, studentList } = usePdfWizardContext();

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t("pages.pdf.summary.students")}: {studentList.length}
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Box ref={ref}>
          <Box sx={{ overflowX: "auto", width: width }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {t("resources.students.fields.fullName", 1)}
                  </TableCell>
                  <TableCell>
                    {t("resources.students.fields.document")}
                  </TableCell>
                  {(formData?.students?.length || 0) > 0 && (
                    <>
                      <Show when="periodFrom">
                        <TableCell>
                          {t(
                            "resources.pdf_downloads.fields.students.periodFrom",
                          )}
                        </TableCell>
                      </Show>
                      <Show when="periodTo">
                        <TableCell>
                          {t(
                            "resources.pdf_downloads.fields.students.periodTo",
                          )}
                        </TableCell>
                      </Show>
                      <Show when="hoursAndDays">
                        <TableCell>
                          {t(
                            "resources.pdf_downloads.fields.students.hoursAndDays",
                          )}
                        </TableCell>
                      </Show>
                      <Show when="totalHours">
                        <TableCell>
                          {t(
                            "resources.pdf_downloads.fields.students.totalHours",
                          )}
                        </TableCell>
                      </Show>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {studentList.map((student) => {
                  const studentInfo = formData?.students?.find(
                    (s) => s.id === student.id,
                  );
                  return (
                    <TableRow key={"summary_students_row_" + student.id}>
                      <TableCell>{student.fullName}</TableCell>
                      <TableCell>{student.document}</TableCell>
                      {studentInfo && (
                        <>
                          <Show when="periodFrom">
                            <TableCell>
                              {dayjs(studentInfo.periodFrom).format(
                                "DD/MM/YYYY",
                              )}
                            </TableCell>
                          </Show>
                          <Show when="periodTo">
                            <TableCell>
                              {dayjs(studentInfo.periodTo).format("DD/MM/YYYY")}
                            </TableCell>
                          </Show>
                          <Show when="hoursAndDays">
                            <TableCell>{studentInfo.hoursAndDays}</TableCell>
                          </Show>
                          <Show when="totalHours">
                            <TableCell>{studentInfo.totalHours}</TableCell>
                          </Show>
                        </>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
