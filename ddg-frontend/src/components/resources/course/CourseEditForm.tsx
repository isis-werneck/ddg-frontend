import {
  AutocompleteInput,
  FormDataConsumer,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  minValue,
  required,
  useTranslate,
  useUnique,
} from "react-admin";
import {
  Course_course_read_timestamps,
  Course_jsonld_course_read_timestamps,
} from "../../../services/openapi";

import { Grid } from "@mui/material";

export const CourseEditForm = () => {
  const t = useTranslate();
  const unique = useUnique();

  const levels = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  return (
    <SimpleForm sanitizeEmptyValues>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SelectInput
            source="type"
            validate={[required()]}
            choices={Object.values(Course_jsonld_course_read_timestamps.type)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextInput source="code" validate={[required(), unique()]} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput source="name" validate={[required()]} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectInput
            source="grade"
            validate={[required()]}
            choices={Object.values(Course_course_read_timestamps.grade)}
            defaultValue={null}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectInput
            source="courseNumber"
            validate={[required(), minValue(1)]}
            choices={levels}
            defaultValue={null}
          />
        </Grid>
        <FormDataConsumer<{ type: string }>>
          {({ formData }) => {
            const isRequired =
              formData.type !==
              Course_jsonld_course_read_timestamps.type.FCT_SEPE;
            return (
              <Grid item xs={12} md={6}>
                <ReferenceInput
                  source="trainingCycle"
                  reference="training_cycles"
                >
                  <AutocompleteInput
                    label={t("resources.courses.fields.trainingCycle")}
                    filterToQuery={(searchTerm) => ({ name: searchTerm })}
                    validate={isRequired ? [required()] : undefined}
                  />
                </ReferenceInput>
              </Grid>
            );
          }}
        </FormDataConsumer>
        <Grid item xs={12} md={6}>
          <ReferenceInput source="tutor" reference="teachers">
            <AutocompleteInput
              label={t("resources.courses.fields.tutor")}
              filterToQuery={(searchTerm) => ({ name: searchTerm })}
              optionText={(choice) =>
                `${choice.firstName} ${choice.firstSurname}`
              }
            />
          </ReferenceInput>
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
