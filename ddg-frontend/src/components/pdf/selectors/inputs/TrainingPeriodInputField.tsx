import { TextField, type TextFieldProps } from "@mui/material";
import { useTranslate } from "react-admin";
import type { PdfTrainingPeriod_pdf_write } from "../../../../services/openapi";


export type InputFieldProps = TextFieldProps & {
  fieldName: keyof PdfTrainingPeriod_pdf_write;
  index: number;
  trainingPeriods: PdfTrainingPeriod_pdf_write[];
  set: (fieldName: keyof PdfTrainingPeriod_pdf_write, index: number, value: string) => void;
}

export const TrainingPeriodInputField = ({
  fieldName,
  index,
  trainingPeriods,
  set,
  ...rest
}: InputFieldProps) => {
  const  t = useTranslate();

  return (
    <TextField
      error={!trainingPeriods[index][fieldName]}
      variant="standard"
      label={t("resources.pdf_downloads.fields.students.trainingPeriods." + fieldName)}
      value={trainingPeriods[index][fieldName]}
      onChange={(e) => {
        set(fieldName, index, e.target.value);
      }}
      helperText={!trainingPeriods[index][fieldName] && t("ra.validation.required")}
      {...rest}
    />
  );
};
