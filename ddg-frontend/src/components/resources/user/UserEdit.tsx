import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { UserEditForm } from "./UserEditForm";

export const UserEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["firstName", "firstSurname"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <UserEditForm />
  </Edit>
);
