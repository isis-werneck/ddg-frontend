import {
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useTranslate,
  useUnique,
} from "react-admin";

import { Grid } from "@mui/material";
import { TrainingCycle_training_cycle_read_timestamps } from "../../../services/openapi";

export const TrainingCycleEditForm = () => {
  const t = useTranslate();
  const unique = useUnique();

  return (
    <SimpleForm sanitizeEmptyValues>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextInput source="code" validate={[required(), unique()]} />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextInput source="name" validate={[required()]} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectInput
            source="regime"
            validate={[required()]}
            choices={Object.values(
              TrainingCycle_training_cycle_read_timestamps.regime,
            )}
            defaultValue={
              TrainingCycle_training_cycle_read_timestamps.regime.GENERAL
            }
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <ReferenceInput
            source="professionalFamily"
            reference="professional_families"
          >
            <AutocompleteInput
              label={t("resources.training_cycles.fields.professionalFamily")}
              filterToQuery={(searchTerm) => ({ name: searchTerm })}
              validate={[required()]}
            />
          </ReferenceInput>
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
