import { TextField } from "@mui/material";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { TrainingActionSelector } from "../../selectors/TrainingActionSelector";
import { Summary } from "../../summary/Summary";

export const fct_anexo2: FlowType = {
  value: PdfFileType.FCT_ANEXO2,
  label: "pages.pdf.document_names.fct_anexo2",
  img: "/assets/img/pdf/fct_anexo2.png",
  steps: [
    {
      component: TrainingActionSelector,
      title: "pages.pdf.training_action_select",
    },
    { component: CompanySelector, title: "pages.pdf.company_select" },
    {
      component: CustomDataSelector,
      isDuplicated: false,
      title: "pages.pdf.custom_info.title",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.program",
            name: "program",
            component: TextField,
            gridOptions: { xs: 12, md: 8 },
          },
          {
            title: "pages.pdf.custom_info.jobTitle",
            name: "jobTitle",
            component: TextField,
            gridOptions: { xs: 12, xl: 8 },
            componentProps: {
              required: true,
              multiline: true,
              minRows: 2,
              maxRows: 6,
              helperText: "pages.pdf.custom_info.jobTitle_helper",
            },
          },
        ],
      },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
