import { TextField } from "@mui/material";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { Summary } from "../../summary/Summary";
import { TrainingActionSelector } from "../../selectors/TrainingActionSelector";

export const cp8: FlowType = {
  value: PdfFileType.FCT_CP8,
  label: "pages.pdf.document_names.fct_cp8",
  img: "/assets/img/pdf/cp8.png",
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
            title: "pages.pdf.custom_info.certificate",
            name: "certificate",
            component: TextField,
            gridOptions: { xs: 12, md: 4 },
          },
          {
            title: "pages.pdf.custom_info.program",
            name: "program",
            component: TextField,
            gridOptions: { xs: 12, md: 4 },
          },
          {
            title: "pages.pdf.custom_info.call",
            name: "call",
            component: TextField,
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.recordNumber",
            name: "recordNumber",
            component: TextField,
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.action",
            name: "action",
            component: TextField,
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.group",
            name: "group",
            component: TextField,
            gridOptions: { xs: 12, md: 3 },
          },
        ],
      },
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: { show: ["companyName", "centerName", "date"] },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
