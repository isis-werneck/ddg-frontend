import {
  DateField,
  EmailField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

import { GeneralValues } from "../../../types/enum";

export const StudentShow = () => (
  <Show title={<ShowTitle sources={["fullName"]} />} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source="fullName" />
      <TextField source="alias" emptyText={GeneralValues.emptyValue} />
      <TextField source="document" />
      <TextField source="studentCode" />
      <DateField source="fileNumber" />
      <ReferenceField
        source="course"
        reference="courses"
        emptyText={GeneralValues.emptyValue}
      >
        <TextField source="name" /> (
        <TextField source="code" /> )
      </ReferenceField>
      <TextField source="unit" />
      <TextField source="registrationStatus" />
      <TextField source="nss" />
      <NumberField source="yearOfRegistration" />
      <DateField source="dateOfRegistration" />
      <DateField
        source="numberOfRegistrationsThisYear"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField source="comments" />
      <TextField source="gender" />
      <TextField source="address" />
      <TextField source="postalCode" />
      <TextField source="city" />
      <TextField source="province" />
      <TextField source="birthCity" emptyText={GeneralValues.emptyValue} />
      <TextField source="birthProvince" emptyText={GeneralValues.emptyValue} />
      <TextField source="birthCountry" emptyText={GeneralValues.emptyValue} />
      <NumberField source="ageAtEndOfYear" />
      <TextField source="nationality" emptyText={GeneralValues.emptyValue} />
      <TextField source="phone" />
      <TextField source="emergencyPhone" emptyText={GeneralValues.emptyValue} />
      <EmailField source="email" emptyText={GeneralValues.emptyValue} />
      <TextField source="name" />
      <TextField source="firstSurname" />
      <TextField source="secondSurname" emptyText={GeneralValues.emptyValue} />
      <TextField
        source="firstGuardianDocument"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianFirstSurname"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianSecondSurname"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianName"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianGender"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianPhone"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="firstGuardianEmail"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianDocument"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianFirstSurname"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianSecondSurname"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianName"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianGender"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianPhone"
        emptyText={GeneralValues.emptyValue}
      />
      <TextField
        source="secondGuardianEmail"
        emptyText={GeneralValues.emptyValue}
      />
      <DateField source="np" emptyText={GeneralValues.emptyValue} />
      <TimestampsFields />
    </SimpleShowLayout>
  </Show>
);
