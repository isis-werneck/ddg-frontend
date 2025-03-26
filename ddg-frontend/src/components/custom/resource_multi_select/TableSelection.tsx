import { Box, Chip, Paper, Typography } from "@mui/material";
import { Button, useTranslate } from "react-admin";

import type { MultiSelectRecordType } from "./ResourceMultiSelect";
import { useMultiSelection } from "../../../hooks/useMultiSelection";

export type TableSelectionProps<T> = {
  resource: string;
  selectedItems: T[];
  filterFields: (keyof T)[];
  labelFunction?: (record: T) => string | JSX.Element;
};

export function TableSelection<T extends MultiSelectRecordType>(
  props: TableSelectionProps<T>,
) {
  const { resource, selectedItems, filterFields, labelFunction } = props;
  const [, selectionModifiers] = useMultiSelection({ resource });
  const t = useTranslate();

  const createLabel = (record: T) => {
    if (labelFunction) return labelFunction(record);
    return filterFields.map((field) => record[field]).join(" - ");
  };

  if (selectedItems?.length > 0) {
    const sortedItems = selectedItems?.sort((a: T, b: T) =>
      filterFields[0] && a[filterFields[0]] > b[filterFields[0]] ? 1 : -1,
    );
    return (
      <Box>
        <Typography variant="h6">
          {t("pages.pdf.selected_items", { length: selectedItems.length })}
        </Typography>
        <Button
          label="ra.action.unselect"
          onClick={() => selectionModifiers.clearSelection()}
        />
        <Paper sx={{ p: 1 }}>
          {sortedItems?.map((item: T, idx) => {
            if (!item) return null;
            return (
              <Chip
                key={`${idx}_${resource}_chip`}
                label={createLabel(item)}
                onDelete={() => selectionModifiers.unselect([item.id])}
                size="small"
                sx={{
                  m: 0.5,
                  height: "auto",
                  p: 0.5,
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
              />
            );
          })}
        </Paper>
      </Box>
    );
  }

  return null;
}
