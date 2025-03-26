import {
  FunctionField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

import { FieldGuesser } from "@api-platform/admin";
import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";
import { useTranslateRoles } from "../../../hooks/useTranslateRoles";

export const UserShow = () => {
  const translateRoles = useTranslateRoles();
  return (
    <Show
      title={<ShowTitle sources={["userName"]} />}
      actions={<ShowActions />}
    >
      <SimpleShowLayout>
        <FieldGuesser source="userName" />
        <FieldGuesser source="email" />
        <FieldGuesser source="firstName" />
        <FieldGuesser source="firstSurname" />
        <FieldGuesser source="secondSurname" />
        <FunctionField
          source="roles"
          render={(record) => translateRoles(record.roles)}
        />
        <ReferenceField source="teacher" reference="teachers" emptyText="---">
          <TextField source="firstName" />
          <TextField source="firstSurname" />
          <TextField source="secondSurname" /> (
          <TextField source="email" />)
        </ReferenceField>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
