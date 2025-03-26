import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";

import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const TrainingActionProgramShow = () => {
  return (
    <Show title={<ShowTitle sources={["name"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <BooleanField source="active" />
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
