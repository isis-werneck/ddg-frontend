import {
  AutocompleteInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  email,
  number,
  required,
  useTranslate,
} from "react-admin";

import { GenderInput } from "../../custom/input_fields/GenderInput";
import { Grid } from "@mui/material";
import { PhoneInput } from "../../custom/input_fields/PhoneInput";
import { nifOrPassport } from "../../../validate/nifOrPassport";

export const StudentEditForm = () => {
  const t = useTranslate();

  return (
    <SimpleForm>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <TextInput source="name" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="firstSurname" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="secondSurname" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextInput source="fullName" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TextInput source="alias" />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TextInput
            source="document"
            validate={[required(), nifOrPassport]}
            InputProps={{ inputProps: { maxLength: 20 } }}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TextInput source="nss" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TextInput source="studentCode" validate={[required(), number()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <TextInput source="fileNumber" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <NumberInput
            source="yearOfRegistration"
            validate={[required()]}
            placeholder={new Date().getFullYear().toString()}
          />
        </Grid>
        <Grid item xs={12} lg={2}>
          <DateInput
            source="dateOfRegistration"
            validate={[required()]}
            defaultValue={new Date()}
          />
        </Grid>
        <Grid item xs={12} lg={1}>
          <NumberInput
            source="numberOfRegistrationsThisYear"
            defaultValue={1}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ReferenceInput source="course" reference="courses">
            <AutocompleteInput
              filterToQuery={(searchTerm) => ({ name: searchTerm })}
            />
          </ReferenceInput>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="unit" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TextInput source="registrationStatus" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <NumberInput source="ageAtEndOfYear" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput
            source="nationality"
            defaultValue={t("nationality.spanish")}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DateInput source="birthDate" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <GenderInput source="gender" validate={[required()]} />
        </Grid>
        <Grid item xs={12}>
          <TextInput source="address" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <TextInput source="postalCode" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <TextInput source="city" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <TextInput source="province" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextInput source="email" validate={[email()]} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <PhoneInput source="phone" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="birthCity" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="birthProvince" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="birthCountry" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PhoneInput source="emergencyPhone" />
        </Grid>
        <Grid item xs={0} lg={8}></Grid>
        <Grid item xs={12} lg={4}>
          <TextInput
            source="firstGuardianDocument"
            validate={[nifOrPassport]}
            InputProps={{ inputProps: { maxLength: 20 } }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="firstGuardianName" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="firstGuardianFirstSurname" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="firstGuardianSecondSurname" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <GenderInput source="firstGuardianGender" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PhoneInput source="firstGuardianPhone" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="firstGuardianEmail" validate={[email()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput
            source="secondGuardianDocument"
            validate={[nifOrPassport]}
            InputProps={{ inputProps: { maxLength: 20 } }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="secondGuardianName" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="secondGuardianFirstSurname" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="secondGuardianSecondSurname" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <GenderInput source="secondGuardianGender" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PhoneInput source="secondGuardianPhone" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="secondGuardianEmail" validate={[email()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="np" placeholder="N/A" />
        </Grid>
        <Grid item xs={12}>
          <TextInput source="comments" rows={4} multiline />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
