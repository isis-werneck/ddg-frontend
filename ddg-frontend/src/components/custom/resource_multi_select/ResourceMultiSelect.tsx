import { Alert, Box } from "@mui/material";
import { useEffect, useRef, type ElementType } from "react";
import {
  FunctionField,
  List,
  SearchInput,
  TopToolbar,
  useTranslate,
  type ListProps,
} from "react-admin";
import type {
  Company_jsonld_company_read_timestamps,
  Module_jsonld_module_read_timestamps,
  PdfDownload_jsonld_pdf_read_timestamps,
  Student_jsonld_student_read_timestamps,
  TrainingAction_jsonld_taction_read_timestamps,
} from "../../../services/openapi";

import { Check } from "@mui/icons-material";
import { useMultiSelection } from "../../../hooks/useMultiSelection";
import { SelectAllButton } from "../list/SelectAllButton";
import { TableColumn } from "./TableColumn";
import { TableDatagrid } from "./TableDatagrid";
import { TableSelection } from "./TableSelection";

export type MultiSelectFieldOptions<T> = {
  source: keyof T;
  component?: ElementType;
  componentProps?: Record<string, unknown>;
  sortBy?: string;
};

export interface ResourceMultiSelectProps<T> {
  resource: string;
  fields: (MultiSelectFieldOptions<T> | keyof T)[];
  filterFields: (keyof T)[];
  filterToQuery?: Partial<Record<keyof T, unknown | Array<unknown>>>;
  selectOne?: boolean;
  selectedItems: T[];
  resultsPerPage?: number;
  setSelectedItems: (items: T[]) => void;
  optimized?: boolean;
  listProps?: Partial<ListProps>;
  selectionLabelFunction?: (record: T) => string | JSX.Element;
}

export type MultiSelectRecordType =
  | Company_jsonld_company_read_timestamps
  | Student_jsonld_student_read_timestamps
  | TrainingAction_jsonld_taction_read_timestamps
  | PdfDownload_jsonld_pdf_read_timestamps
  | Module_jsonld_module_read_timestamps;

export function ResourceMultiSelect<T extends MultiSelectRecordType>({
  resource,
  filterFields,
  fields,
  filterToQuery,
  selectOne,
  selectedItems,
  setSelectedItems,
  resultsPerPage = 10,
  optimized = false,
  listProps,
  selectionLabelFunction,
}: ResourceMultiSelectProps<T>) {
  const t = useTranslate();

  const [selectedIds, selectionModifiers] = useMultiSelection(
    { resource },
    listProps?.storeKey,
  );
  const select = selectionModifiers.select;
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (selectedItems?.length > 0) {
        select(selectedItems.map((item) => item.id));
      }
    }
  }, [initialized, selectedItems, select]);

  useEffect(() => {
    if (selectOne && selectedIds.length > 1) {
      select(selectedIds.slice(0, 1));
    }
  }, [selectedIds, selectOne, select]);

  return (
    <Box>
      <List
        title=" "
        actions={
          selectOne ? (
            false
          ) : (
            <TopToolbar>
              <SelectAllButton resource={resource} />
            </TopToolbar>
          )
        }
        resource={resource}
        perPage={resultsPerPage}
        filter={filterToQuery}
        filters={filterFields.map((field) => (
          <SearchInput
            key={`${field.toString()}_${resource}_search_input`}
            type="text"
            source={field.toString()}
            name={field.toString()}
            alwaysOn
            placeholder={t(`resources.${resource}.fields.${field.toString()}`)}
          />
        ))}
        empty={<Alert severity="error">{t("ra.navigation.no_results")}</Alert>}
        storeKey={`${resource}_multi_select.list`}
        disableSyncWithLocation
        {...listProps}
      >
        <TableDatagrid
          resource={resource}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          selectOne={selectOne}
          optimized={optimized}
          selectedIds={selectedIds}
          selectionModifiers={selectionModifiers}
        >
          {fields.map((field: keyof T | MultiSelectFieldOptions<T>) => (
            <TableColumn
              source={
                typeof field === "string"
                  ? field
                  : (field as MultiSelectFieldOptions<T>).source
              }
              field={field}
              sortBy={
                typeof field === "string"
                  ? field
                  : (field as MultiSelectFieldOptions<T>).sortBy
              }
              key={
                ((typeof field === "string"
                  ? field
                  : (field as MultiSelectFieldOptions<T>).source) as string) +
                `_${resource}_column`
              }
            />
          ))}
          <FunctionField
            render={(record) => {
              return (
                <Check
                  fontSize="small"
                  sx={{ opacity: selectedIds.includes(record.id) ? 1 : 0 }}
                />
              );
            }}
          />
        </TableDatagrid>
      </List>
      <TableSelection
        resource={resource}
        selectedItems={selectedItems}
        filterFields={filterFields}
        labelFunction={selectionLabelFunction}
      />
    </Box>
  );
}
