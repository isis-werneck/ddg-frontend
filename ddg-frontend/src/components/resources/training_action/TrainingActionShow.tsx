import {
  DateField,
  ReferenceArrayField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";

import { GeneralValues } from "../../../types/enum";
import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const TrainingActionShow = () => {
  const t = useTranslate();
  return (
    <Show title={<ShowTitle sources={["name"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="actionType" />
        <ReferenceField
          source="trainingActionProgram"
          reference="training_action_programs"
          emptyText={GeneralValues.emptyValue}
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField source="trainingSpecialityName" />
        <TextField source="trainingSpecialityCode" />
        <TextField source="trainingActionCode" />
        <DateField source="startDate" emptyText={GeneralValues.emptyValue} />
        <DateField source="endDate" emptyText={GeneralValues.emptyValue} />
        <TextField
          source="jobTitle"
          emptyText={GeneralValues.emptyValue}
          sx={{ whiteSpace: "pre-line" }}
        />
        <ReferenceField
          source="trainingActionProgram.@id"
          reference="training_action_programs"
          label={t("resources.training_actions.fields.trainingActionProgram")}
          emptyText={GeneralValues.emptyValue}
        />
        <ReferenceField
          source="course"
          reference="courses"
          label={t("resources.training_actions.fields.course")}
          sortable={false}
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
          sortable={false}
        >
          <TextField source="code" />
        </ReferenceField>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
