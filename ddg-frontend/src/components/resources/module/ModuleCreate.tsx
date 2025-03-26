import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { ModuleEditForm } from "./ModuleEditForm";

export const ModuleCreate = () => (
  <Create actions={<CreateActions />}>
    <ModuleEditForm />
  </Create>
);
