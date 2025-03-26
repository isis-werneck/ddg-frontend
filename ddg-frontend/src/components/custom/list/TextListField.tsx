import { get } from "lodash";
import { useCallback } from "react";
import {
  FunctionField,
  useListFilterContext,
  type FunctionFieldProps,
} from "react-admin";
import { HighlightText } from "../common/Highlighttext";

interface TextListFieldProps extends Partial<FunctionFieldProps> {
  searchSource?: string;
  transform?: (value: string) => string;
}

export const TextListField = (props: TextListFieldProps) => {
  const searchContext = useListFilterContext();

  const { searchSource, source, transform, ...rest } = props;

  const getSearchTerm = useCallback(
    (filterSource: string | undefined) => {
      const sourceParts = (filterSource ?? "").split(".");
      return get(searchContext.filterValues, sourceParts) ?? "";
    },
    [searchContext],
  );

  return (
    <FunctionField
      {...rest}
      source={source}
      render={(record) => {
        const filterSource: string | undefined = searchSource || source;
        let value = record[source ?? ""]?.toString() ?? "";
        let searchTerm = getSearchTerm(filterSource);
        if (transform && typeof transform === "function") {
          value = transform(value);
          searchTerm = transform(searchTerm);
        }
        return <HighlightText text={value} searchTerm={searchTerm} />;
      }}
    />
  );
};
