import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { TeacherEditForm } from "./TeacherEditForm";

export const TeacherEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["firstName", "firstSurname"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <TeacherEditForm />
  </Edit>
);
