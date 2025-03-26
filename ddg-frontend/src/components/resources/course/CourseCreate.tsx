import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { CourseEditForm } from "./CourseEditForm";

export const CourseCreate = () => (
  <Create actions={<CreateActions />}>
    <CourseEditForm />
  </Create>
);
