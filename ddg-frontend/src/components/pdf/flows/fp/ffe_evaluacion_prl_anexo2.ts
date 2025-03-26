import { Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CourseSelector } from "../../selectors/CourseSelector.tsx";
import { CustomDataSelector } from "../../selectors/CustomDataSelector.tsx";
import { ModuleSelector } from "../../selectors/ModuleSelector.tsx";
import { evaluationRequirements } from "../../selectors/selector_props/evaluationRequirements.ts";
import { SignatorySelector } from "../../selectors/SignatorySelector";
import { StudentsSelector } from "../../selectors/StudentsSelector.tsx";
import { Summary } from "../../summary/Summary";

export const ffe_evaluacion_prl_anexo2: FlowType = {
  value: PdfFileType.FFE_EVALUACION_PRL_ANEXO2,
  label: "pages.pdf.document_names.ffe_evaluacion_prl_anexo2",
  img: "/assets/img/pdf/ffe_evaluacion_prl_anexo2.png",
  steps: [
    {
      component: CourseSelector,
      title: "pages.pdf.course_select",
    },
    {
      component: ModuleSelector,
      title: "pages.pdf.module_select",
    },
    {
      component: StudentsSelector,
      title: "pages.pdf.students_select",
      context: { selectOne: true },
    },
    {
      component: CustomDataSelector,
      isDuplicated: true,
      title: "pages.pdf.evaluation_requirements_select",
      context: {
        customData: evaluationRequirements("Anexo2"),
      },
    },
    {
      component: CustomDataSelector,
      isDuplicated: true,
      title: "pages.pdf.custom_info.title",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.competences_acquisition_assessment",
            name: "competences_acquisition_assessment",
            component: Select,
            options: [
              {
                label: "pages.pdf.custom_info.select_options.positive",
                value: "pages.pdf.custom_info.select_options.positive",
              },
              {
                label: "pages.pdf.custom_info.select_options.negative",
                value: "pages.pdf.custom_info.select_options.negative",
              },
            ],
            componentProps: {
              fullWidth: true,
              variant: "filled",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
          {
            title: "pages.pdf.custom_info.evaluation_date",
            name: "evaluation_date",
            component: DatePicker,
            componentProps: {
              format: "DD/MM/YYYY",
              slotProps: {
                textField: {
                  error: false,
                },
              },
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
            transformFunction: (value) => dayjs(value, "YYYY-MM-DD"),
          },
          {
            title: "pages.pdf.custom_info.observations",
            name: "observations",
            componentProps: {
              type: "text",
              required: false,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
        ],
      },
    },
    {
      component: SignatorySelector,
      title: "pages.pdf.signatory.title",
      context: { show: ["date", "place", "centerName"] },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
