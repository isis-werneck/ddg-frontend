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
import { ReferenceField, TextField, useTranslate } from "react-admin";

import { ExpandMore } from "@mui/icons-material";
import { useMeasure } from "react-use";
import { usePdfWizardContext } from "../context/PdfWizardContext";

export const LearningOutomes = () => {
  const t = useTranslate();
  const { learningOutcomesList } = usePdfWizardContext();

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t("pages.pdf.summary.learning_outcomes")}:{" "}
        {learningOutcomesList?.length}
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Box ref={ref}>
          <Box sx={{ overflowX: "auto", width: width }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: "100px" }}>
                    {t("resources.learning_outcomes.fields.code")}
                  </TableCell>
                  <TableCell sx={{ minWidth: "200px" }}>
                    {t("resources.learning_outcomes.fields.description")}
                  </TableCell>
                  <TableCell>
                    {t("resources.learning_outcomes.fields.course")}
                  </TableCell>
                  <TableCell>
                    {t("resources.learning_outcomes.fields.module")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {learningOutcomesList?.map((learningOutcome) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={learningOutcome.id}
                    >
                      <TableCell>{learningOutcome.code}</TableCell>
                      <TableCell>{learningOutcome.description}</TableCell>
                      <TableCell>
                        <ReferenceField
                          source="course"
                          reference="courses"
                          record={learningOutcome}
                          link={false}
                        >
                          <TextField source="name" />
                        </ReferenceField>
                      </TableCell>
                      <TableCell>
                        <ReferenceField
                          source="module"
                          reference="modules"
                          record={learningOutcome}
                          link={false}
                        >
                          <TextField source="code" />
                          -
                          <TextField source="name" />
                        </ReferenceField>
                      </TableCell>
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
