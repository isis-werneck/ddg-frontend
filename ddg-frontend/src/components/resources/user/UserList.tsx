import {
  ReferenceField,
  SearchInput,
  SelectInput,
  TextField,
  useTranslate,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { Role } from "../../../types/Role";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";
import { useTranslateRoles } from "../../../hooks/useTranslateRoles";

export const UserList = () => {
  const t = useTranslate();
  const translateRoles = useTranslateRoles();
  return (
    <ScrollableList
      actions={<ListActions excludeImport={true} />}
      filters={[
        <SearchInput
          source={"email"}
          key="email"
          name="email_partial"
          placeholder={t("resources.users.fields.email")}
        />,
        <SearchInput
          source={"userName"}
          key="userName"
          name="userName_partial"
          placeholder={t("resources.users.fields.userName")}
        />,
        <SelectInput
          source={"has_role"}
          key="has_role"
          name="has_role"
          choices={Object.values(Role)}
          placeholder={t("resources.users.fields.roles")}
          label={t("resources.users.fields.roles")}
          optionText={(role: Role) =>
            translateRoles(Object.values(role)[0] || "")
          }
        />,
        <SelectInput
          source={"has_teacher"}
          key="has_teacher"
          name="exists[teacher]"
          choices={[
            { id: "true", name: t("ra.message.yes") },
            { id: "false", name: t("ra.message.no") },
          ]}
          placeholder={t("resources.users.has_teacher")}
          label={t("resources.users.has_teacher")}
        />,
      ]}
    >
      <TextListField
        source="email"
        searchSource="email_partial"
      ></TextListField>
      <TextListField
        source="userName"
        searchSource="userName_partial"
      ></TextListField>
      <TextListField source="firstName"></TextListField>
      <TextListField source="firstSurname"></TextListField>
      <TextListField source="secondSurname"></TextListField>
      <TextListField
        source="roles"
        searchSource="has_role"
        transform={(value) => translateRoles(value)}
      ></TextListField>
      <ReferenceField
        source="teacher"
        reference="teachers"
        label={t("resources.users.fields.teacher")}
        sortable={false}
      >
        <TextField source="firstName"></TextField>{" "}
        <TextField source="firstSurname"></TextField>
      </ReferenceField>
    </ScrollableList>
  );
};
