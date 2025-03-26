import { TextField } from "@mui/material";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { StudentsInfoSelector } from "../../selectors/StudentsInfoSelector";
import { StudentsSelector } from "../../selectors/StudentsSelector";
import { TrainingActionSelector } from "../../selectors/TrainingActionSelector";
import { Summary } from "../../summary/Summary";

export const cp1: FlowType = {
  value: PdfFileType.FCT_CP1,
  label: "pages.pdf.document_names.fct_cp1",
  img: "/assets/img/pdf/cp1.png",
  steps: [
    {
      component: TrainingActionSelector,
      title: "pages.pdf.training_action_select",
    },
    { component: CompanySelector, title: "pages.pdf.company_select" },
    {
      component: StudentsSelector,
      title: "pages.pdf.students_select",
      context: { selectOne: false },
    },
    {
      component: StudentsInfoSelector,
      title: "pages.pdf.students_info_select",
      context: {
        show: ["periodFrom", "periodTo", "hoursAndDays", "totalHours"],
      },
    },
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
      context: { show: ["companyName", "centerName", "place", "date"] },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
