import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { StudentEditForm } from "./StudentEditForm";

export const StudentEdit = () => {
  return (
    <Edit
      mutationMode="pessimistic"
      title={<EditTitle sources={["fullName", "document"]} joint=" - " />}
      actions={<EditActions />}
      sanitizeEmptyValues={true}
    >
      <StudentEditForm />
    </Edit>
  );
};
