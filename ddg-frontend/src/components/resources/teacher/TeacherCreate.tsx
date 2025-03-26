import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { TeacherEditForm } from "./TeacherEditForm";

export const TeacherCreate = () => (
  <Create actions={<CreateActions />}>
    <TeacherEditForm />
  </Create>
);
