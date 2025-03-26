import {
  AutocompleteInput,
  ReferenceArrayField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SelectInput,
  TextField,
  useCanAccess,
  useTranslate,
  type Translate,
  type UseCanAccessResult,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

const filters = (t: Translate, canAccessUsers: UseCanAccessResult) => {
  const filters = [
    <SearchInput
      source={"email"}
      key="email"
      name={"email_partial"}
      placeholder={t("resources.teachers.fields.email")}
    />,
    <SearchInput
      source={"nif"}
      key="nif"
      placeholder={t("resources.teachers.fields.nif")}
    />,
    <SearchInput
      source={"firstName"}
      key="firstName"
      placeholder={t("resources.teachers.fields.firstName")}
    />,
    <SearchInput
      source={"firstSurname"}
      key="firstSurname"
      placeholder={t("resources.teachers.fields.firstSurname")}
    />,
    <SearchInput
      source={"secondSurname"}
      key="secondSurname"
      placeholder={t("resources.teachers.fields.secondSurname")}
    />,
    <ReferenceInput
      key="courses"
      source={"courses"}
      reference="courses"
      placeholder={t("resources.teachers.fields.courses")}
    >
      <AutocompleteInput
        multiple
        optionText="name"
        filterToQuery={(searchTerm: string) => ({ userName: searchTerm })}
      />
    </ReferenceInput>,
    <SelectInput
      source={"has_courses"}
      key="has_courses"
      name="exists[courses]"
      choices={[
        { id: "true", name: t("ra.message.yes") },
        { id: "false", name: t("ra.message.no") },
      ]}
      placeholder={t("resources.teachers.has_courses")}
      label={t("resources.teachers.has_courses")}
    />,
  ];
  if (canAccessUsers.canAccess) {
    filters.push(
      <ReferenceInput
        key="user"
        source={"user"}
        reference="users"
        placeholder={t("resources.teachers.fields.user")}
      >
        <AutocompleteInput
          multiple
          optionText="userName"
          filterToQuery={(searchTerm: string) => ({
            userName_partial: searchTerm,
          })}
        />
      </ReferenceInput>,
      <SelectInput
        source={"has_user"}
        key="has_user"
        name="exists[user]"
        choices={[
          { id: "true", name: t("ra.message.yes") },
          { id: "false", name: t("ra.message.no") },
        ]}
        placeholder={t("resources.teachers.has_user")}
        label={t("resources.teachers.has_user")}
      />,
    );
  }
  return filters;
};

export const TeacherList = () => {
  const t = useTranslate();
  const canAccessUsers = useCanAccess({
    resource: "users",
    action: "show",
  });

  return (
    <ScrollableList
      actions={<ListActions />}
      filters={filters(t, canAccessUsers)}
    >
      <TextListField source="firstName"></TextListField>
      <TextListField source="firstSurname"></TextListField>
      <TextListField source="secondSurname"></TextListField>
      <TextListField source="email" searchSource={"email_partial"}></TextListField>
      <TextListField source="nif"></TextListField>
      {canAccessUsers.canAccess && (
        <ReferenceField source="user" reference="users" sortBy="user.userName">
          <TextField source="userName"></TextField>{" "}
        </ReferenceField>
      )}
      <ReferenceArrayField
        source="courses"
        reference="courses"
        sortBy="courses.name"
      ></ReferenceArrayField>
      <ReferenceArrayField
        source="modules"
        reference="modules"
        sortBy="modules.name"
      ></ReferenceArrayField>
    </ScrollableList>
  );
};
