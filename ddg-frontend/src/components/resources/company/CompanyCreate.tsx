import { CompanyEditForm } from "./CompanyEditForm";
import { Create } from "react-admin";
import { CreateActions } from "../../../layout/actionbar/CreateActions";

export const CompanyCreate = () => (
  <Create actions={<CreateActions />}>
    <CompanyEditForm sanitizeEmptyValues={true} />
  </Create>
);
