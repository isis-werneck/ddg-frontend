import { CustomDataSelectorProp } from "../CustomDataSelector.tsx";
import { Select } from "@mui/material";

const evaluationRequirementsList: Record<string, string>[] = [
  {
    key: "question1",
    text: "pages.pdf.evaluation_requirements.question1",
  },
  {
    key: "question2",
    text: "pages.pdf.evaluation_requirements.question2",
  },
  {
    key: "question3",
    text: "pages.pdf.evaluation_requirements.question3",
  },
  {
    key: "question4",
    text: "pages.pdf.evaluation_requirements.question4",
  },
  {
    key: "question5",
    text: "pages.pdf.evaluation_requirements.question5",
  },
  {
    key: "question6",
    text: "pages.pdf.evaluation_requirements.question6",
  },
  {
    key: "question7",
    text: "pages.pdf.evaluation_requirements.question7",
  },
  {
    key: "question8",
    text: "pages.pdf.evaluation_requirements.question8",
  },
  {
    key: "question9",
    text: "pages.pdf.evaluation_requirements.question9",
  },
  {
    key: "question10",
    text: "pages.pdf.evaluation_requirements.question10",
  },
  {
    key: "question11",
    text: "pages.pdf.evaluation_requirements.question11",
  },
];

export const evaluationRequirements: (
  dataType: string,
) => CustomDataSelectorProp[] = (dataType) => {
  const options: Record<string, string>[] = [
    {
      label: "pages.pdf.custom_info.select_options.yes",
      value: "pages.pdf.custom_info.select_options.yes",
    },
    {
      label: "pages.pdf.custom_info.select_options.no",
      value: "pages.pdf.custom_info.select_options.no",
    },
    ...(dataType === "Anexo1"
      ? [
          {
            label: "pages.pdf.custom_info.select_options.not_applicable",
            value: "pages.pdf.custom_info.select_options.not_applicable",
          },
        ]
      : []),
  ];

  return evaluationRequirementsList.map((requirement) => ({
    name: requirement.key,
    title: requirement.text,
    component: Select,
    options: options,
    componentProps: {
      fullWidth: true,
      variant: "filled",
      required: true,
    },
    gridOptions: { xs: 12, sm: 12, md: 6 },
  }));
};

