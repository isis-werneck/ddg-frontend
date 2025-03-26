import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { LearningOutcomeEditForm } from "./LearningOutcomeEditForm";

export const LearningOutcomeCreate = () => (
  <Create actions={<CreateActions />}>
    <LearningOutcomeEditForm />
  </Create>
);
