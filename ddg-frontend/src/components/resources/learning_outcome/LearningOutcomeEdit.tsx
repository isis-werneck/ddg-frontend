import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { LearningOutcomeEditForm } from "./LearningOutcomeEditForm";

export const LearningOutcomeEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["name"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <LearningOutcomeEditForm />
  </Edit>
);
