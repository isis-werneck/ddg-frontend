import {
    BooleanInput,
    required,
    SimpleForm,
    TextInput,
    useUnique,
} from "react-admin";

export const TrainingActionProgramEditForm = () => {
  const unique = useUnique();

  return (
    <SimpleForm sanitizeEmptyValues>
      <TextInput source="name" validate={[required(), unique()]} />
      <BooleanInput source="active" />
    </SimpleForm>
  );
};
