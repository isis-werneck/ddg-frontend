import { Edit } from "react-admin";

import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { TrainingCycleEditForm } from "./TrainingCycleEditForm";

export const TrainingCycleEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["name"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <TrainingCycleEditForm />
  </Edit>
);
