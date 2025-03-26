import { SimpleForm, TextInput, required, useUnique } from "react-admin";

export const ProfessionalFamilyEditForm = () => {
  const unique = useUnique();

  return (
    <SimpleForm sanitizeEmptyValues>
      <TextInput source="code" validate={[required(), unique()]} />
      <TextInput source="name" validate={[required()]} />
    </SimpleForm>
  );
};
