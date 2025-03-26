import {
  BooleanInput,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { SaveButton } from "ra-ui-materialui/src/button";

export const GeneralSettingsEdit = () => {
  return (
    <Edit
      mutationMode="pessimistic"
      title={<EditTitle sources={["name"]} />}
      actions={<EditActions />}
      sanitizeEmptyValues={true}
    >
      <SimpleForm toolbar={<SaveButton sx={{ margin: "30px" }} />}>
        <TextField source="settingsDescription" />
        <TextInput source="settingsValue" label={false} />
        <BooleanInput source="active" />
      </SimpleForm>
    </Edit>
  );
};
