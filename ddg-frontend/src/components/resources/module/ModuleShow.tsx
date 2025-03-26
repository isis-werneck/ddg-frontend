import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

import { GeneralValues } from "../../../types/enum";

export const ModuleShow = () => {
  return (
    <Show title={<ShowTitle sources={["name"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="code" />
        <TextField source="name" />
        <ReferenceField
          source="course"
          reference="courses"
          emptyText={GeneralValues.emptyValue}
        >
          <TextField source="name" /> (
          <TextField source="code" /> )
        </ReferenceField>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
