import {
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";

import { ShowActions } from "../../../layout/actionbar/ShowActions";
import { ShowTitle } from "../ShowTitle";
import { TimestampsFields } from "../TimestampsFields";

export const TrainingCycleShow = () => {
  const t = useTranslate();

  return (
    <Show
      title={<ShowTitle sources={["code"]} />}
      actions={<ShowActions />}
    >
      <SimpleShowLayout>
        <TextField source="code" />
        <TextField source="name" />
        <ReferenceField
          source="professionalFamily"
          reference="professional_families"
          label={t("resources.training_cycles.fields.professionalFamily")}
        >
          <TextField source="name" /> (
          <TextField source="code" /> )
        </ReferenceField>
        <TimestampsFields />
      </SimpleShowLayout>
    </Show>
  );
};
