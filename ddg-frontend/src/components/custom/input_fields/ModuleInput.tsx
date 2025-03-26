import { Stack, Typography } from "@mui/material";
import {
  AutocompleteInput,
  ReferenceArrayInput,
  ReferenceField,
  TextField,
  type AutocompleteInputProps,
  type RaRecord,
  type ReferenceArrayInputProps,
} from "react-admin";
import { GeneralValues } from "../../../types/enum";

/**
 * Renders a module option text with the module's name and associated course details.
 * Displays the course name and code if available, with a fallback to a predefined empty value.
 *
 * To be used as the `optionText` prop in an `AutocompleteInput` component.
 * In case we want to use it, we should set also the `inputText` prop to the `name` field.
 *
 * @param {RaRecord} record - The record object containing the module data.
 */

export const ModuleOptionText = (record: RaRecord) => (
  <Stack direction={"column"}>
    {record.name}
    {" ("}
    {record.code}
    {")"}
    <ReferenceField
      record={record}
      source="course"
      reference="courses"
      emptyText={GeneralValues.emptyValue}
      link={false}
    >
      <Typography variant="caption" fontStyle={"italic"} fontSize={"x-small"}>
        <TextField source="code" variant="caption" />
        {" - "}
        <TextField source="name" variant="caption" />
        {" ("}
        <TextField source="type" variant="caption" />
        {")"}
      </Typography>
    </ReferenceField>
  </Stack>
);

export type ModuleInputProps = Omit<ReferenceArrayInputProps, "reference"> & {
  autocompleteProps?: AutocompleteInputProps<RaRecord, boolean>;
};

export const ModuleInput = (props: ModuleInputProps) => {
  const { autocompleteProps, source, ...rest } = props;
  return (
    <ReferenceArrayInput
      source={source || "modules"}
      reference={"modules"}
      {...rest}
    >
      <AutocompleteInput
        multiple
        filterToQuery={(searchTerm) => ({ name: searchTerm })}
        matchSuggestion={(filterValue, suggestion) =>
          suggestion.name.toLowerCase().includes(filterValue.toLowerCase())
        }
        inputText={(record) => record?.name || ""}
        {...autocompleteProps}
        optionText={ModuleOptionText}
      />
    </ReferenceArrayInput>
  );
};
