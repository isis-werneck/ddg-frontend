import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { TrainingActionProgramEditForm } from "./TrainingActionProgramEditForm";

export const TrainingActionProgramCreate = () => (
  <Create actions={<CreateActions />}>
    <TrainingActionProgramEditForm />
  </Create>
);
