import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";

import { FieldGuesser } from "@api-platform/admin";
import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const LearningOutcomeShow = () => {
  const t = useTranslate();

  return (
    <Show title={<ShowTitle sources={["code"]} />} actions={<ShowActions />}>
      <SimpleShowLayout>
        <FieldGuesser source="code" />

        <ReferenceField
          source="course"
          reference="courses"
          label={t("resources.learning_outcomes.fields.course")}
        >
          <TextField source="code" />
          {" - "}
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField
          source="module"
          reference="modules"
          label={t("resources.learning_outcomes.fields.module")}
        >
          <TextField source="code" />
          {" - "}
          <TextField source="name" />
        </ReferenceField>
        <FieldGuesser source="description" />
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
