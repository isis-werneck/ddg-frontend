import { Show, SimpleShowLayout, TextField } from "react-admin";

import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const ProfessionalFamilyShow = () => {
  return (
    <Show title={<ShowTitle sources={["code"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="code" />
        <TextField source="name" />
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
