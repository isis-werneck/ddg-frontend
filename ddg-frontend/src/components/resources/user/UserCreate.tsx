import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { UserEditForm } from "./UserEditForm";

export const UserCreate = () => (
  <Create actions={<CreateActions />}>
    <UserEditForm />
  </Create>
);
