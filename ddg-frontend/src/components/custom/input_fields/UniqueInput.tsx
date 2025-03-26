import type { ComponentType, ReactElement } from "react";
import { useResourceContext, useUnique, type InputProps } from "react-admin";
import { useWatch } from "react-hook-form";

export type UniqueInputProps = {
  uniqueFields: string[];
  component: ComponentType<InputProps>;
};

/**
 * An `Input` component that uses `useUnique` to validate against a database filter.
 * Used to validate unique indexes with several fields.
 *
 * @example
 * import { UniqueInput, TextInput } from 'react-admin';
 * import { useWatch } from 'react-hook-form';
 *
 * const LearningOutcomeEdit = () => {
 *   const course = useWatch('course');
 *   const module = useWatch('module');
 *
 *   return (
 *     <SimpleForm>
 *       <TextInput source="code" />
 *       <UniqueInput
 *         source="code"
 *         uniqueFields={['course', 'module']}
 *         component={TextInput}
 *       />
 *     </SimpleForm>
 *   );
 * };
 *
 * @param {Object} props The component props
 * @prop {string[]} uniqueFields The fields to include in the filter
 * @prop {ReactElement} component The component to use for the input
 * @prop {Object} rest The rest of the props, passed to the component
 *
 * @typedef {Object} Props
 * @prop {string[]} Props.uniqueFields
 * @prop {ReactElement} Props.component
 * @prop {Object} Props.rest
 */
export const UniqueInput = <T extends InputProps>({
  uniqueFields,
  component: Component,
  ...rest
}: T & UniqueInputProps): ReactElement => {
  const unique = useUnique();

  const resource = useResourceContext();

  const watchers = useWatch({ name: uniqueFields });
  const uniqueFilter: Record<string, unknown> = {};

  for (const index in uniqueFields) {
    const field = uniqueFields[index];
    uniqueFilter[field] = watchers[index] ?? "";
  }

  const uniqueValidator = unique({
    filter: uniqueFilter,
    debounce: 0,
    message: `resources.${resource}.validation.unique`,
  });

  let validate = [uniqueValidator];
  if (rest.validate) {
    const currentValidate = !Array.isArray(rest.validate)
      ? [rest.validate]
      : rest.validate;
    validate = [...currentValidate, uniqueValidator];
  }

  return <Component {...rest} validate={validate} />;
};
