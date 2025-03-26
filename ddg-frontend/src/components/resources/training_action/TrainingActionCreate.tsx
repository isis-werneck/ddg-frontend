import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { TrainingActionEditForm } from "./TrainingActionEditForm";

export const TrainingActionCreate = () => (
  <Create actions={<CreateActions />}>
    <TrainingActionEditForm />
  </Create>
);
