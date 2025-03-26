import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import type { PdfLearningOutcome_pdf_write } from "../../../services/openapi";
import { useMeasure } from "react-use";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useTranslate } from "react-admin";

export const LearningOutomesInfo = () => {
  const t = useTranslate();
  const { formData, learningOutcomesList } = usePdfWizardContext();

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
                    {t("pages.pdf.learning_outcomes.integrallyInCompany")}
                  </TableCell>
                  <TableCell>
                    {t("pages.pdf.learning_outcomes.integrallyInCenter")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {learningOutcomesList?.map((learningOutcome) => {
                  const info: PdfLearningOutcome_pdf_write =
                    formData.learningOutcomes?.find(
                      (lo) => lo.learningOutcome === learningOutcome.id,
                    ) || {};
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={learningOutcome.id}
                    >
                      <TableCell>{learningOutcome.code}</TableCell>
                      <TableCell>{learningOutcome.description}</TableCell>
                      <TableCell colSpan={3}>
                        <Stack
                          direction={"row"}
                          gap={2}
                          sx={{ width: "100%" }}
                          justifyContent={"space-around"}
                        >
                          <Typography>
                            {info.integrallyInCompany ? "X" : ""}
                          </Typography>
                          <Typography>
                            {info.integrallyInCenter ? "X" : ""}
                          </Typography>
                        </Stack>
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
