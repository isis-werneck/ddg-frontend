import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { ModuleEditForm } from "./ModuleEditForm";

export const ModuleEdit = () => {
  return (
    <Edit
      mutationMode="pessimistic"
      title={<EditTitle sources={["name"]} />}
      actions={<EditActions />}
      sanitizeEmptyValues={true}
    >
      <ModuleEditForm />
    </Edit>
  );
};
