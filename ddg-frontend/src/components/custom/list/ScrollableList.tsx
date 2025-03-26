import {
  BulkActionsToolbar,
  BulkDeleteButton,
  DatagridConfigurable,
  Empty,
  List,
  TopToolbar,
  useListContext,
  useResourceContext,
  type DatagridConfigurableProps,
  type ListProps,
} from "react-admin";

import { Box } from "@mui/material";
import { useMeasure } from "react-use";
import { useExporter } from "../../../hooks/useExporter";
import { ImportButton } from "../../import/ImportButton";

export type ScrollableListProps = ListProps & {
  datagridProps?: Partial<DatagridConfigurableProps>;
};

export const ScrollableList = (props: ScrollableListProps) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const resource = useResourceContext();
  const exporter = useExporter(resource);

  const { datagridProps, ...rest } = props;

  const CustomDatagrid = (customProps: DatagridConfigurableProps) => {
    const { isLoading, isPending } = useListContext();

    return (
      <DatagridConfigurable
        {...customProps}
        isLoading={isLoading}
        isPending={isPending}
        sx={{
          overflow: "auto",
          width: width,
          maxHeight: "calc(100vh - 175px)",
          whiteSpace: "nowrap",
        }}
      />
    );
  };

  const empty = (
    <>
      <Empty resource={resource} hasCreate={true} />
      <TopToolbar resource={resource} sx={{ justifyContent: "center" }}>
        <ImportButton />
      </TopToolbar>
    </>
  );

  return (
    <Box ref={ref}>
      <List empty={empty} exporter={exporter} {...rest}>
        <BulkActionsToolbar>
          <BulkDeleteButton />
        </BulkActionsToolbar>
        <CustomDatagrid rowClick={"show"} {...datagridProps}>
          {props.children}
        </CustomDatagrid>
      </List>
    </Box>
  );
};
