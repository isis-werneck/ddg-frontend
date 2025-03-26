import type { ElementType } from "react";
import { TextListField } from "../list/TextListField";
import type { MultiSelectFieldOptions } from "./ResourceMultiSelect";

export function TableColumn<T>({
  field,
  source,
  sortBy,
}: {
  field: keyof T | MultiSelectFieldOptions<T>;
  source: keyof T | string;
  sortBy?: string;
}) {
  const isString = typeof field === "string";
  const fieldMulti: MultiSelectFieldOptions<T> = isString
    ? {
        source: field as keyof T,
      }
    : (field as MultiSelectFieldOptions<T>);

  const Component: ElementType = fieldMulti.component ?? TextListField;

  let props = {
    source: source ?? fieldMulti.source,
    sortBy: sortBy ?? "",
  };

  if (fieldMulti.componentProps) {
    props = { ...props, ...fieldMulti.componentProps };
  }
  return <Component {...props} />;
}
