import {
  AutocompleteInput,
  CanAccess,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  email,
  required,
  useNotify,
  useRecordContext,
  useRedirect,
  useSaveContext,
  useUnique,
  type NotificationType,
  type RaRecord,
} from "react-admin";

import { InputGuesser } from "@api-platform/admin";
import { useState } from "react";
import { User_jsonld_user_write } from "../../../services/openapi";
import { Role } from "../../../types/Role";
import { nif } from "../../../validate/nif";
import { phone } from "../../../validate/phone";
import { ModuleInput } from "../../custom/input_fields/ModuleInput";
import { PhoneInput } from "../../custom/input_fields/PhoneInput";
import { HasUserSelector } from "./HasUserSelector";

export const enum TeacherHasUser {
  NONE = "none",
  EXISTING = "existing",
  NEW = "new",
}

export const TeacherEditForm = () => {
  const record = useRecordContext();
  const recordHasUser = record?.user
    ? TeacherHasUser.EXISTING
    : TeacherHasUser.NONE;
  const [userNew, setUserNew] = useState<TeacherHasUser>(recordHasUser);

  const { save } = useSaveContext();
  const notify = useNotify();
  const redirect = useRedirect();
  const unique = useUnique();

  let user: User_jsonld_user_write | null = null;

  const handleSubmit = (record: Partial<RaRecord>) => {
    switch (userNew) {
      case TeacherHasUser.NONE:
        record.user = null;
        break;
      case TeacherHasUser.NEW: {
        user = {
          email: record.email,
          userName: record.email.replace(/@.*$/, ""),
          roles: [Role.viewer],
          password: record.password,
          firstName: record.firstName,
          firstSurname: record.firstSurname,
          secondSurname: record.secondSurname,
        };
        record.user = user;
        break;
      }
    }
    save &&
      save(record, {
        onSuccess: () => {
          const notifyOptions = {
            type: "success" as NotificationType,
            messageArgs: { userName: user ? user.userName : "" },
          };
          const notifyMessage =
            userNew === TeacherHasUser.NEW ? "user_created" : "saved";
          notify("resources.teachers." + notifyMessage, notifyOptions);
          redirect("list", "teachers");
        },
      });
  };

  return (
    <SimpleForm sanitizeEmptyValues onSubmit={handleSubmit}>
      <InputGuesser source="firstName" validate={[required()]} />
      <InputGuesser source="firstSurname" validate={[required()]} />
      <InputGuesser source="secondSurname" />
      <InputGuesser source="nif" validate={[nif, required(), unique()]} />
      <InputGuesser source="email" validate={[email(), required(), unique()]} />
      <PhoneInput source="phone" validate={[phone, required()]} />
      <ReferenceArrayInput
        source="courses"
        reference="courses"
        filter={{ "exists[tutor]": false }}
      >
        <AutocompleteInput
          multiple
          filterToQuery={(searchTerm) => ({ name: searchTerm })}
        />
      </ReferenceArrayInput>

      <ModuleInput />

      <CanAccess resource="users" action="create">
        <HasUserSelector setUserNew={setUserNew} userNew={userNew} />
        {userNew === TeacherHasUser.EXISTING && (
          <ReferenceInput
            source="user"
            reference="users"
            filter={{ "exists[teacher]": false }}
          >
            <AutocompleteInput
              validate={[required()]}
              source="userName"
              filterToQuery={(searchTerm) => ({ userName_partial: searchTerm })}
              optionText={(record) => `${record.userName} (${record.email})`}
            />
          </ReferenceInput>
        )}
      </CanAccess>
    </SimpleForm>
  );
};
