import { Edit } from "react-admin";

import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { TrainingActionProgramEditForm } from "./TrainingActionProgramEditForm";

export const TrainingActionProgramEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["name"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <TrainingActionProgramEditForm />
  </Edit>
);
