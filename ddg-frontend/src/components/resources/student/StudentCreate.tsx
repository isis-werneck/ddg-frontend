import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { StudentEditForm } from "./StudentEditForm";

export const StudentCreate = () => (
  <Create actions={<CreateActions />}>
    <StudentEditForm />
  </Create>
);
