import { Divider, RadioGroup, TextField } from "@mui/material";
import { PdfFileType } from "../../../../hooks/usePdfFormData";
import { type FlowType } from "../../flows";
import { CompanySelector } from "../../selectors/CompanySelector";
import { CompanyTutorSelector } from "../../selectors/CompanyTutorSelector";
import { CustomDataSelector } from "../../selectors/CustomDataSelector";
import { FctSSRadio } from "../../selectors/inputs/FctSSRadio";
import { TrainingActionSelector } from "../../selectors/TrainingActionSelector";
import { Summary } from "../../summary/Summary";
import { Labeled } from "react-admin";

export const fct_anexo1: FlowType = {
  value: PdfFileType.FCT_ANEXO1,
  label: "pages.pdf.document_names.fct_anexo1",
  img: "/assets/img/pdf/fct_anexo1.png",
  steps: [
    {
      component: TrainingActionSelector,
      title: "pages.pdf.training_action_select",
    },
    { component: CompanySelector, title: "pages.pdf.company_select" },
    {
      component: CompanyTutorSelector,
      title: "pages.pdf.company_tutor.address",
      context: { show: ["address"] },
    },
    {
      component: CustomDataSelector,
      isDuplicated: false,
      title: "pages.pdf.custom_info.title",
      context: {
        customData: [
          {
            title: "pages.pdf.custom_info.ssResponsible",
            name: "ssResponsible",
            component: RadioGroup,
            componentProps: {
              sx: { padding: 2 },
              children: [
                <Labeled
                  key="labeled"
                  label="pages.pdf.custom_info.ssResponsible"
                  sx={{ "& .RaLabeled-label": {fontSize: "18px"}}}
                >
                  <></>
                </Labeled>,
                <Divider key="divider" />,
                <FctSSRadio value="company" key="company"></FctSSRadio>,
                <FctSSRadio value="center" key="center"></FctSSRadio>,
                <Divider key="divider2" />
              ],
            },
            gridOptions: { xs: 12 },
          },
          {
            title: "pages.pdf.custom_info.program",
            name: "program",
            component: TextField,
            gridOptions: { xs: 12, md: 8 },
          },
        ],
      },
    },
    { component: Summary, title: "pages.pdf.summary.title" },
  ],
};
