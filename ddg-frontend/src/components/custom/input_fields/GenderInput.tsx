import { SelectInput, useTranslate, type SelectInputProps } from "react-admin";

type GenderInputProps = SelectInputProps & {
  choices?: never;
};

export const GenderInput = (props: GenderInputProps) => {
  const t = useTranslate();
  const genders = [
    { id: "H", name: t("gender.male") },
    { id: "M", name: t("gender.female") },
    { id: "X", name: t("gender.other") },
  ];

  return <SelectInput {...props} choices={genders} />;
};
