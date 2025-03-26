import {
  CanAccess,
  ChipField,
  EmailField,
  Labeled,
  ReferenceArrayField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  useTranslate,
} from "react-admin";

import { FieldGuesser } from "@api-platform/admin";
import { GeneralValues } from "../../../types/enum";
import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const TeacherShow = () => {
  const t = useTranslate();

  return (
    <Show
      title={<ShowTitle sources={["firstName", "firstSurname"]} />}
      actions={<ShowActions />}
    >
      <SimpleShowLayout>
        <FieldGuesser source="firstName" />
        <FieldGuesser source="firstSurname" />
        <FieldGuesser
          source="secondSurname"
          emptyText={GeneralValues.emptyValue}
        />
        <FieldGuesser source="nif" />
        <EmailField source="email" />
        <TextField source="phone" />
        <ReferenceArrayField source="courses" reference="courses">
          <SingleFieldList empty={<>{GeneralValues.emptyValue}</>}>
            <ChipField source="name" size="small" />
          </SingleFieldList>
        </ReferenceArrayField>
        <CanAccess resource="users" action="show">
          <Labeled label={t("resources.teachers.fields.user")}>
            <ReferenceField
              source="user"
              reference="users"
              emptyText={GeneralValues.emptyValue}
            >
              <TextField source="userName" />
              {" ("}
              <TextField source="email" />
              {")"}
            </ReferenceField>
          </Labeled>
        </CanAccess>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
