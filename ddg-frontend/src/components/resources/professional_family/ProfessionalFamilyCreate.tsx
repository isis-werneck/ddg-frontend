import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";
import { ProfessionalFamilyEditForm } from "./ProfessionalFamilyEditForm";

export const ProfessionalFamilyCreate = () => (
  <Create actions={<CreateActions />}>
    <ProfessionalFamilyEditForm />
  </Create>
);
