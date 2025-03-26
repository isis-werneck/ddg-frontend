import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { CourseEditForm } from "./CourseEditForm";

export const CourseEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["name"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <CourseEditForm />
  </Edit>
);
