import {
  AutocompleteInput,
  DateField,
  ReferenceArrayField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  TextField,
  useTranslate,
} from "react-admin";

import { ListActions } from "../../../layout/actionbar/ListActions";
import { ScrollableList } from "../../custom/list/ScrollableList";
import { TextListField } from "../../custom/list/TextListField";

export const TrainingActionList = () => {
  const t = useTranslate();
  return (
    <ScrollableList
      sort={{ field: "id", order: "DESC" }}
      filters={[
        <SearchInput
          name="code_partial"
          source="code_partial"
          key="code_partial"
          placeholder={t(
            "resources.training_actions.fields.trainingActionCode",
          )}
        />,
        <ReferenceInput
          source="course"
          reference="courses"
          key="course"
          sort={{ field: "name", order: "ASC" }}
          name="course"
        >
          <AutocompleteInput
            multiple
            filterToQuery={(searchTerm: string) => ({ name: searchTerm })}
          />
        </ReferenceInput>,
        <ReferenceInput
          name="module"
          source="module"
          reference="modules"
          key="module"
          sort={{ field: "name", order: "ASC" }}
        >
          <AutocompleteInput
            multiple
            filterToQuery={(searchTerm: string) => ({ name: searchTerm })}
          />
        </ReferenceInput>,
      ]}
      actions={<ListActions />}
    >
      <TextField source="actionType" />
      <TextListField source="trainingActionCode" searchSource="code_partial" />
      <ReferenceField
        source="course"
        reference="courses"
        label={t("resources.training_actions.fields.course")}
        sortBy="course.name"
      >
        <TextField source="name" /> (
        <TextField source="code" /> )
      </ReferenceField>
      <ReferenceArrayField
        source="modules"
        reference="modules"
        label={t("resources.training_actions.fields.modules")}
        sortBy="modules.name"
      ></ReferenceArrayField>
      <ReferenceField
        source="learningOutcome"
        reference="learning_outcomes"
        label={t("resources.training_actions.fields.learningOutcome")}
        sortBy="learningOutcome.code"
      >
        <TextField source="code" />
      </ReferenceField>
      <TextField source="trainingSpecialityCode" />
      <TextField source="trainingSpecialityName" />
      <DateField source="startDate" />
      <DateField source="endDate" />
      <TextField source="jobTitle" />
      <ReferenceField
        source="trainingActionProgram"
        reference="training_action_programs"
        sortBy="trainingActionProgram.name"
      >
        <TextField source="name" />
      </ReferenceField>
    </ScrollableList>
  );
};
