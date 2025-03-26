import {
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

export const CourseShow = () => {
  const t = useTranslate();

  return (
    <Show title={<ShowTitle sources={["code"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <TextField source="type" />
        <TextField source="code" />
        <TextField source="courseNumber" />
        <TextField source="name" />
        <ReferenceField
          source="trainingCycle"
          reference="training_cycles"
          label={t("resources.courses.fields.trainingCycle")}
          emptyText={GeneralValues.emptyValue}
        >
          <TextField source="name" /> (
          <TextField source="code" /> )
        </ReferenceField>
        <ReferenceField
          source="tutor"
          reference="teachers"
          label={t("resources.courses.fields.tutor")}
          emptyText={GeneralValues.emptyValue}
        >
          <TextField source="firstName" />
          <TextField source="firstSurname" />
        </ReferenceField>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
