import {
  AutocompleteInput,
  DateInput,
  FormDataConsumer,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { Button, Grid, Typography } from "@mui/material";

import { Add } from "@mui/icons-material";
import { Course_jsonld_course_read_timestamps } from "../../../services/openapi";
import { ModuleInput } from "../../custom/input_fields/ModuleInput";
import { useFormContext } from "react-hook-form";

export const TrainingActionEditForm = () => {
  const t = useTranslate();

  const record = useRecordContext();

  // Initialize references by id instead of object
  if (record) {
    record.course = record?.course?.["@id"] ?? record?.course ?? null;
    record.module = record?.module?.["@id"] ?? record?.module ?? null;
    record.learningOutcome =
      record?.learningOutcome?.["@id"] ?? record?.learningOutcome ?? null;
    record.trainingActionProgram =
      record?.trainingActionProgram?.["@id"] ??
      record?.trainingActionProgram ??
      null;
  }

  const CourseInput = () => {
    const { setValue } = useFormContext();
    return (
      <ReferenceInput
        source="course"
        reference="courses"
        label={t("resources.training_actions.fields.course")}
        sort={{ field: "name", order: "ASC" }}
      >
        <AutocompleteInput
          label={t("resources.training_actions.fields.course")}
          filterToQuery={(searchTerm) => ({ name: searchTerm })}
          validate={[required()]}
          onChange={() => {
            setValue("modules", []);
            setValue("learningOutcome", null);
          }}
        ></AutocompleteInput>
      </ReferenceInput>
    );
  };

  return (
    <SimpleForm sanitizeEmptyValues>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <TextInput source="trainingActionCode" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SelectInput
            source="actionType"
            validate={[required()]}
            choices={Object.values(Course_jsonld_course_read_timestamps.type)}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ReferenceInput
            source="trainingActionProgram"
            reference="training_action_programs"
          >
            <AutocompleteInput validate={[required()]}></AutocompleteInput>
          </ReferenceInput>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="trainingSpecialityCode" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextInput source="trainingSpecialityName" validate={[required()]} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <DateInput source="startDate" />
        </Grid>
        <Grid item xs={12} lg={2}>
          <DateInput source="endDate" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CourseInput />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormDataConsumer<{ course: string; modules: string[] }>>
            {({ formData }) => {
              return (
                <ModuleInput
                  filter={formData.course ? { course: formData.course } : {}}
                  autocompleteProps={{
                    disabled: !formData.course,
                    label: formData.course
                      ? t("resources.training_actions.fields.modules")
                      : t("resources.training_actions.module_select_first"),
                    validate: [required()],
                  }}
                />
              );
            }}
          </FormDataConsumer>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormDataConsumer<{ course: string; modules: string[] }>>
            {({ formData }) => {
              const disabled = !formData.course || !formData?.modules?.length;
              return (
                <ReferenceInput
                  source="learningOutcome"
                  reference="learning_outcomes"
                  label={t("resources.training_actions.fields.learningOutcome")}
                  filter={{
                    module: formData?.modules || "",
                    course: formData?.course || "",
                  }}
                  sort={{ field: "code", order: "ASC" }}
                >
                  <AutocompleteInput
                    readOnly={disabled}
                    helperText={
                      disabled &&
                      t(
                        "resources.training_actions.learning_outcome_select_first",
                      )
                    }
                    label={t(
                      "resources.training_actions.fields.learningOutcome",
                    )}
                    validate={[required()]}
                    optionText={(record) =>
                      record.code + " ( " + record.description + " )"
                    }
                    filterToQuery={(searchTerm) => ({
                      code_partial: searchTerm,
                    })}
                    noOptionsText={
                      !disabled && (
                        <>
                          <Typography>
                            {t(
                              "resources.training_actions.no_autcomplete_results",
                            )}{" "}
                          </Typography>
                          <Button
                            href={`/resources#/learning_outcomes/create?course=${formData.course}&module=${formData.modules[0]}`}
                            startIcon={<Add />}
                            target="_blank"
                          >
                            {t("ra.action.add") +
                              " " +
                              t("resources.learning_outcomes.name", 1)}
                          </Button>
                        </>
                      )
                    }
                  ></AutocompleteInput>
                </ReferenceInput>
              );
            }}
          </FormDataConsumer>
        </Grid>
        <Grid item xs={12}>
          <TextInput source="jobTitle" multiline={true} maxRows={5} />
        </Grid>
      </Grid>
    </SimpleForm>
  );
};
