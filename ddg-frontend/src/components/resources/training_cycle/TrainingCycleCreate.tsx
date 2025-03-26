import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { TrainingCycleEditForm } from "./TrainingCycleEditForm";

export const TrainingCycleCreate = () => (
  <Create actions={<CreateActions />} redirect="list">
    <TrainingCycleEditForm />
  </Create>
);
