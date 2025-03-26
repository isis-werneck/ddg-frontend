import {
  AutocompleteInput,
  ChipField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SelectInput,
  TextField,
  useTranslate,
} from "react-admin";

import { Course_jsonld_course_read_timestamps } from "../../../services/openapi";
import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const CourseList = () => {
  const t = useTranslate();

  return (
    <ScrollableList
      sort={{ field: "id", order: "DESC" }}
      emptyWhileLoading={true}
      filters={[
        <SelectInput
          source="type"
          choices={Object.values(Course_jsonld_course_read_timestamps.type)}
          name="type"
          key="type"
          placeholder={t("resources.courses.fields.type")}
        />,
        <SearchInput
          source="code"
          key="code"
          placeholder={t("resources.courses.fields.code")}
          name="code_partial"
        />,
        <SearchInput
          name="name"
          key="name"
          source="name"
          placeholder={t("resources.courses.fields.name")}
        />,
        <ReferenceInput
          key="tutor"
          source={"tutor"}
          reference="teachers"
          placeholder={t("resources.courses.fields.tutor")}
        >
          <AutocompleteInput
            optionText={(record) =>
              record.firstName + " " + record.firstSurname
            }
            filterToQuery={(searchTerm: string) => ({ email: searchTerm })}
          />
        </ReferenceInput>,
        <SelectInput
          source="grade"
          choices={Object.values(Course_jsonld_course_read_timestamps.grade)}
          name="grade"
          key="grade"
          placeholder={t("resources.courses.fields.grade")}
        />,
        <SelectInput
          source={"has_tutor"}
          key="has_tutor"
          name="exists[tutor]"
          choices={[
            { id: "true", name: t("ra.message.yes") },
            { id: "false", name: t("ra.message.no") },
          ]}
          placeholder={t("resources.courses.has_tutor")}
          label={t("resources.courses.has_tutor")}
        />,
      ]}
      actions={<ListActions />}
    >
      <TextListField source="type" />
      <TextListField source="code" searchSource="code_partial" />
      <ChipField source="grade" />
      <TextListField source="courseNumber" />
      <TextListField source="name" />
      <ReferenceField
        source="trainingCycle"
        reference="training_cycles"
        label={t("resources.courses.fields.trainingCycle")}
        sortBy="trainingCycle.name"
      >
        <TextField source="name" /> (
        <TextField source="code" /> )
      </ReferenceField>
      <ReferenceField
        source="tutor"
        reference="teachers"
        label={t("resources.courses.fields.tutor")}
        sortBy="tutor.firstName"
      >
        <TextField source="firstName" />
        <TextField source="firstSurname" /> (
        <TextField source="email" />)
      </ReferenceField>
    </ScrollableList>
  );
};
