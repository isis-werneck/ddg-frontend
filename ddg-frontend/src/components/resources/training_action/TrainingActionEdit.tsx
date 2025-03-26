import { Edit } from "react-admin";
import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { TrainingActionEditForm } from "./TrainingActionEditForm";

export const TrainingActionEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["trainingActionCode"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <TrainingActionEditForm />
  </Edit>
);
