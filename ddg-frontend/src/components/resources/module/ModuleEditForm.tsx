import {
  AutocompleteInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

import { UniqueInput } from "../../custom/input_fields/UniqueInput";

export const ModuleEditForm = () => {
  return (
    <SimpleForm>
      <UniqueInput
        source="code"
        validate={[required()]}
        component={TextInput}
        uniqueFields={["course"]}
      />
      <TextInput source="name" validate={[required()]} />
      <ReferenceInput source="course" reference="courses">
        <AutocompleteInput
          validate={[required()]}
          filterToQuery={(searchTerm) => ({ name: searchTerm })}
        ></AutocompleteInput>
      </ReferenceInput>
    </SimpleForm>
  );
};
