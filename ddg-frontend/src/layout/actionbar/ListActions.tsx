import { useContext } from "react";
import {
  CreateButton,
  ExportButton,
  FilterButton,
  FilterContext,
  type ListActionsProps as RaListActionsProps,
  SelectColumnsButton,
  TopToolbar,
  useListContext,
  useResourceDefinition,
} from "react-admin";
import { ImportButton } from "../../components/import/ImportButton";

export type ListActionsProps = RaListActionsProps & {
  excludeImport?: boolean;
};
export const ListActions = (props: ListActionsProps) => {
  const { hasCreate } = useResourceDefinition(props);
  const { exporter, total } = useListContext();
  const filters = useContext(FilterContext);
  const { excludeImport, ...rest } = props;

  return (
    <TopToolbar {...rest}>
      {filters && <FilterButton />}
      <SelectColumnsButton />
      {exporter !== false && <ExportButton disabled={total === 0} />}
      {!excludeImport && <ImportButton />}
      {hasCreate && <CreateButton variant="outlined" />}
      {props.children}
    </TopToolbar>
  );
};
