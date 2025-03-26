import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CourseSelector } from "../../selectors/CourseSelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { Summary } from "../../summary/Summary";

export const anexo3_beca: FlowType = {
  value: PdfFileType.FFE_ANEXO_BECA_INTENSIVO,
  label: "pages.pdf.document_names.ffe_anexo3_beca",
  img: "/assets/img/pdf/ffe_anexo_beca_intensivo.png",
  steps: [
    { component: CompanySelector, title: "pages.pdf.company_select" },
    { component: CourseSelector, title: "pages.pdf.course_select" },
    {
      component: CustomDataSelector,
      title: "pages.pdf.custom_info.title",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.scholarshipAmount",
            name: "scholarshipAmount",
            componentProps: {
              type: "number",
              InputProps: { inputProps: { min: 0 } },
            },
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.studentsNumber",
            name: "studentsNumber",
            componentProps: {
              type: "number",
              InputProps: { inputProps: { min: 0 } },
            },
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.training_start_date_select",
            name: "trainingStartDate",
            component: DatePicker,
            componentProps: {
              format: "DD/MM/YYYY",
            },
            transformFunction: (value) => dayjs(value, "YYYY-MM-DD"),
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.training_end_date_select",
            name: "trainingEndDate",
            component: DatePicker,
            componentProps: {
              format: "DD/MM/YYYY",
            },
            transformFunction: (value) => dayjs(value, "YYYY-MM-DD"),
            gridOptions: { xs: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.observations",
            name: "observations",
            componentProps: { multiline: true, required: false, minRows: 2 },
            gridOptions: { xs: 12, sm: 12, md: 12 },
          },
        ],
      },
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: { show: ["companyName", "date", "centerName", "companyName2"] },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
