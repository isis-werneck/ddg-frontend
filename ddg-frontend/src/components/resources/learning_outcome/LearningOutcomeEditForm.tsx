import {
  AutocompleteInput,
  FormDataConsumer,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
  type RaRecord,
} from "react-admin";

import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { ModuleInput } from "../../custom/input_fields/ModuleInput";
import { UniqueInput } from "../../custom/input_fields/UniqueInput";

export const LearningOutcomeEditForm = () => {
  const record = useRecordContext();

  // Initialize references by id instead of object
  if (record) {
    record.course = record?.course?.["@id"] ?? record?.course ?? null;
    record.module = record?.module?.["@id"] ?? record?.module ?? null;
  }

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const courseParam = params.get("course");
  const moduleParam = params.get("module");

  const CourseInput = () => {
    const { setValue } = useFormContext();
    return (
      <ReferenceInput
        source="course"
        reference="courses"
        sort={{ field: "name", order: "ASC" }}
      >
        <UniqueInput
          source="course"
          validate={[required()]}
          uniqueFields={["code", "module"]}
          component={AutocompleteInput}
          filterToQuery={(searchTerm: string) => ({ name: searchTerm })}
          defaultValue={courseParam}
          onChange={(value) =>
            setValue("module", value == courseParam ? moduleParam : null)
          }
          optionText={(record: RaRecord) =>
            `${record.name} (${record.code}) (${record.type})`
          }
        />
      </ReferenceInput>
    );
  };

  return (
    <SimpleForm sanitizeEmptyValues warnWhenUnsavedChanges>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={2}>
          <UniqueInput
            source="code"
            validate={[required()]}
            uniqueFields={["course", "module"]}
            component={TextInput}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <CourseInput />
        </Grid>
        <Grid item xs={12} lg={5}>
          <FormDataConsumer<{ course: string }>>
            {({ formData }) => {
              return (
                <UniqueInput
                  source="module"
                  uniqueFields={["code", "course"]}
                  component={ModuleInput}
                  filterToQuery={(searchTerm: string) => ({
                    name: searchTerm,
                  })}
                  filter={formData.course ? { course: formData.course } : {}}
                  autocompleteProps={{
                    validate: required(),
                    defaultValue: moduleParam,
                    disabled: !formData.course,
                    multiple: false,
                  }}
                />
              );
            }}
          </FormDataConsumer>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            source="description"
            validate={[required()]}
            rows={4}
            multiline
          />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
