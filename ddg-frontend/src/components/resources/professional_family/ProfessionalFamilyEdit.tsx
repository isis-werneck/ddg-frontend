import { Edit } from "react-admin";

import { EditActions } from "../../../layout/actionbar/EditActions";
import { EditTitle } from "../EditTitle";
import { ProfessionalFamilyEditForm } from "./ProfessionalFamilyEditForm";

export const ProfessionalFamilyEdit = () => (
  <Edit
    mutationMode="pessimistic"
    title={<EditTitle sources={["name"]} />}
    actions={<EditActions />}
    sanitizeEmptyValues={true}
  >
    <ProfessionalFamilyEditForm />
  </Edit>
);
