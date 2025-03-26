import {
  AutocompleteInput,
  ChipField,
  DateField,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  TextField,
  useTranslate,
} from "react-admin";

import { GenderInput } from "../../custom/input_fields/GenderInput";
import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const StudentList = () => {
  const t = useTranslate();
  return (
    <ScrollableList
      sort={{ field: "id", order: "DESC" }}
      filters={[
        <SearchInput
          source="document"
          key="document"
          placeholder={t("resources.students.fields.document")}
        />,
        <SearchInput
          key="name"
          source="fullName"
          placeholder={t("resources.students.fields.fullName")}
        />,
        <SearchInput
          key="email"
          source="email"
          placeholder={t("resources.students.fields.email")}
        />,
        <SearchInput
          key="fileNumber"
          source="fileNumber"
          placeholder={t("resources.students.fields.fileNumber")}
        />,
        <GenderInput
          key="gender"
          source="gender"
          placeholder={t("resources.students.fields.gender")}
        />,
        <ReferenceInput source="course" reference="courses" key="course">
          <AutocompleteInput
            multiple
            filterToQuery={(searchTerm: string) => ({ name: searchTerm })}
            source="name"
          />
        </ReferenceInput>,
      ]}
      actions={<ListActions />}
    >
      <TextListField source="fullName" />
      <TextField source="alias" />
      <TextListField source="document" />
      <TextListField source="fileNumber" />
      <TextField source="studentCode" />
      <TextListField source="email" />
      <ReferenceField source="course" reference="courses" sortBy="course.name">
        <ChipField source="name" />
      </ReferenceField>
      <TextField source="unit" />
      <TextField source="registrationStatus" />
      <TextField source="nss" />
      <TextField source="yearOfRegistration" />
      <DateField source="dateOfRegistration" />
      <TextField source="numberOfRegistrationsThisYear" />
      <TextField source="comments" />
      <ChipField source="gender" />
      <TextField source="address" />
      <TextField source="postalCode" />
      <TextField source="city" />
      <TextField source="province" />
      <TextField source="birthCity" />
      <TextField source="birthProvince" />
      <TextField source="birthCountry" />
      <NumberField source="ageAtEndOfYear" />
      <TextField source="nationality" />
      <TextField source="phone" />
      <TextField source="emergencyPhone" />
      <TextField source="name" />
      <TextField source="firstSurname" />
      <TextField source="secondSurname" />
      <TextField source="firstGuardianDocument" />
      <TextField source="firstGuardianFirstSurname" />
      <TextField source="firstGuardianSecondSurname" />
      <TextField source="firstGuardianName" />
      <TextField source="firstGuardianGender" />
      <TextField source="firstGuardianPhone" />
      <TextField source="firstGuardianEmail" />
      <TextField source="secondGuardianDocument" />
      <TextField source="secondGuardianFirstSurname" />
      <TextField source="secondGuardianSecondSurname" />
      <TextField source="secondGuardianName" />
      <TextField source="secondGuardianGender" />
      <TextField source="secondGuardianPhone" />
      <TextField source="secondGuardianEmail" />
      <TextField source="np" />
    </ScrollableList>
  );
};
