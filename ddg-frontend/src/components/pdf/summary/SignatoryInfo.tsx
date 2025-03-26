import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { Show } from "../selectors/inputs/Show";
import dayjs from "dayjs";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useTranslate } from "react-admin";

export const SignatoryInfo = () => {
  const t = useTranslate();
  const { formData } = usePdfWizardContext();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        {t("pages.pdf.summary.signatory")}
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Show when="centerName">
          <Typography variant="caption">
            {t("pages.pdf.signatory.centerName")}:
          </Typography>
          <Typography variant="body1">
            {formData?.signatory?.centerName}
          </Typography>
        </Show>
        <Show when="companyName">
          <Typography variant="caption">
            {t("pages.pdf.signatory.companyName")}:
            <Typography variant="body1">
              {formData?.signatory?.companyName}
            </Typography>
          </Typography>
        </Show>
        <Show when="place">
          <Typography variant="caption">
            {t("pages.pdf.signatory.place")}:
            <Typography variant="body1">
              {formData?.signatory?.place}
            </Typography>
          </Typography>
        </Show>
        <Show when="date">
          <Typography variant="caption">
            {t("pages.pdf.signatory.date")}:
            <Typography variant="body1">
              {dayjs(formData?.signatory?.date).format("DD/MM/YYYY")}
            </Typography>
          </Typography>
        </Show>
      </AccordionDetails>
    </Accordion>
  );
};
