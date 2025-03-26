import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import {
  CanAccess,
  PasswordInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  email,
  required,
  useRecordContext,
  useTranslate,
  useUnique,
  type SimpleFormProps,
} from "react-admin";

import { useState } from "react";
import { useTranslateRoles } from "../../../hooks/useTranslateRoles";
import { Role } from "../../../types/Role";
import { equalToField } from "../../../validate/equalToField";
import { password } from "../../../validate/password";

export const enum TeacherHasUser {
  NONE = "none",
  EXISTING = "existing",
  NEW = "new",
}

export type UserEditFormProps = Partial<SimpleFormProps> & {
  noRoles?: boolean;
};

export const UserEditForm = (props: UserEditFormProps) => {
  const unique = useUnique();
  const t = useTranslate();
  const translateRoles = useTranslateRoles();
  const record = useRecordContext();

  const [showPassword, setShowPassword] = useState(!record);

  const { noRoles, ...rest } = props;

  return (
    <SimpleForm {...rest}>
      <Grid container spacing={1} xl={9}>
        <CanAccess resource="users" action="show">
          <Grid item xs={12} md={5}>
            <TextInput source="userName" validate={[required(), unique()]} />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextInput
              source="email"
              validate={[required(), unique(), email()]}
            />
          </Grid>
        </CanAccess>
        <Grid item xs={12}>
          <TextInput source="firstName" validate={[required()]} />
          <TextInput source="firstSurname" validate={[required()]} />
          <TextInput source="secondSurname" />
          {!noRoles && (
            <SelectArrayInput
              source="roles"
              choices={Object.values(Role)}
              optionText={(role) => translateRoles(role.id)}
              validate={[required()]}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {!!record && (
            <FormControlLabel
              label={t("resources.users.show_password")}
              control={
                <Checkbox
                  checked={showPassword}
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              }
            />
          )}
          {showPassword && (
            <Card>
              <CardContent sx={{ padding: "0 !important, 1rem", margin: 0 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <PasswordInput
                      source="password"
                      validate={[required(), password]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PasswordInput
                      source="confirm_password"
                      label="resources.users.confirm_password"
                      validate={[
                        required(),
                        password,
                        equalToField("password"),
                      ]}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
