import { Button, Select } from "@mui/material";
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

export const ffe_evaluacion_prl_anexo1: FlowType = {
  value: PdfFileType.FFE_EVALUACION_PRL_ANEXO1,
  label: "pages.pdf.document_names.ffe_evaluacion_prl_anexo1",
  img: "/assets/img/pdf/ffe_evaluacion_prl_anexo1.png",
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
      context: { selectOne: true, hide: ["hoursAndDays", "totalHours"] },
    },
    {
      component: CustomDataSelector,
      isDuplicated: false,
      title: "pages.pdf.evaluation_requirements_select",
      context: {
        customData: evaluationRequirements("Anexo1"),
      },
    },
    {
      component: CustomDataSelector,
      isDuplicated: true,
      title: "pages.pdf.unsafe_behaviors_record_select",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.item_number",
            name: "item_number",
            isDataGroup: true,
            componentProps: {
              type: "number",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
          {
            title: "pages.pdf.custom_info.short_description",
            name: "short_description",
            isDataGroup: true,
            componentProps: {
              type: "text",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
          {
            title: "pages.pdf.custom_info.occurrence_place",
            name: "occurrence_place",
            isDataGroup: true,
            componentProps: {
              type: "text",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
          {
            title: "pages.pdf.custom_info.occurrence_date",
            name: "occurrence_date",
            isDataGroup: true,
            component: DatePicker,
            componentProps: {
              format: "DD/MM/YYYY",
              variant: "filled",
              required: true,
              slotProps: {
                textField: {
                  error: false,
                },
              },
            },
            transformFunction: (value) => dayjs(value, "YYYY-MM-DD"),
            gridOptions: { xs: 12, sm: 12, md: 6 },
          },
          {
            title: "pages.pdf.custom_info.behavior_qualification",
            name: "behavior_qualification",
            isDataGroup: true,
            component: Select,
            options: [
              {
                label: "pages.pdf.custom_info.select_options.minor",
                value: "pages.pdf.custom_info.select_options.minor",
              },
              {
                label: "pages.pdf.custom_info.select_options.major",
                value: "pages.pdf.custom_info.select_options.major",
              },
              {
                label: "pages.pdf.custom_info.select_options.veryMajor",
                value: "pages.pdf.custom_info.select_options.veryMajor",
              },
            ],
            componentProps: {
              fullWidth: true,
              variant: "filled",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.behavior_consequence_qualification",
            name: "behavior_consequence_qualification",
            isDataGroup: true,
            component: Select,
            options: [
              {
                label: "pages.pdf.custom_info.select_options.minor",
                value: "pages.pdf.custom_info.select_options.minor",
              },
              {
                label: "pages.pdf.custom_info.select_options.major",
                value: "pages.pdf.custom_info.select_options.major",
              },
              {
                label: "pages.pdf.custom_info.select_options.veryMajor",
                value: "pages.pdf.custom_info.select_options.veryMajor",
              },
            ],
            componentProps: {
              fullWidth: true,
              variant: "filled",
              required: true,
            },
            gridOptions: { xs: 12, sm: 12, md: 3 },
          },
          {
            title: "pages.pdf.custom_info.add_fields",
            name: "add_fields",
            component: Button,
            componentProps: {
              variant: "contained",
              maxfieldsets: 4,
              required: false,
            },
            gridOptions: { xs: 12, sm: 12, md: 8 },
          },
        ],
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
            gridOptions: { xs: 12, sm: 12, md: 8 },
          },
          {
            title: "pages.pdf.custom_info.reinforcement_assessment",
            name: "reinforcement_assessment",
            componentProps: {
              type: "text",
              required: false,
            },
            gridOptions: { xs: 12, sm: 12, md: 8 },
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
