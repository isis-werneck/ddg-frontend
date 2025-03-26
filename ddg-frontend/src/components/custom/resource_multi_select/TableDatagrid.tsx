import { useCallback, useEffect, useState } from "react";
import { Datagrid, Loading, useListContext, type Identifier, type UseRecordSelectionResult } from "react-admin";
import { dataProvider } from "../../../dataProvider";
import type { MultiSelectRecordType } from "./ResourceMultiSelect";

export type DatagridProps<T> = {
  children: React.ReactNode;
  resource: string;
  selectOne?: boolean;
  setSelectedItems: (items: T[]) => void;
  selectedItems: T[];
  optimized?: boolean;
  selectedIds?: Identifier[];
  selectionModifiers?: UseRecordSelectionResult[1];
};

export function TableDatagrid<T extends MultiSelectRecordType>(
  props: DatagridProps<T>,
) {
  const {
    children,
    selectOne,
    resource,
    setSelectedItems,
    selectedItems,
    optimized,
    selectedIds,
    selectionModifiers
  } = props;

  const { isPending, data: visibleData } = useListContext();
  const [localSelectedItems, setLocalSelectedItems] = useState<
    Map<Identifier, T>
  >(new Map(selectedItems?.map((item) => [item?.id ? item.id : "", item])));

  // Memoize the filter function to avoid unnecessary re-creations
  const filterSelectedItems = useCallback((items: T[], ids: Identifier[]) => {
    const idSet = new Set(ids);
    const itemsMap = new Map(
      items
        .filter((item) => idSet.has(item.id || ""))
        .map((item) => [item?.id ? item.id : "", item] as [Identifier, T]),
    );
    return itemsMap;
  }, []);

  useEffect(() => {
    const areEqual =
      selectedItems?.length === localSelectedItems.size &&
      selectedItems?.every((item) => {
        const mapItem = localSelectedItems.get(item.id || "");
        return mapItem && JSON.stringify(mapItem) === JSON.stringify(item);
      });

    if (areEqual) return;

    setSelectedItems(Array.from(localSelectedItems.values()));
  }, [localSelectedItems, setSelectedItems, selectedItems]);

  useEffect(() => {
    if (isPending) return;
    const loadMissingSelectedItems = async (missingIds: Identifier[]) => {
      const missingIdsNotVisible = missingIds.filter(
        (id) => !visibleData?.some((item) => item.id === id),
      );
      let items = [
        ...localSelectedItems.values(),
        ...(visibleData || ([] as T[])),
      ];
      if (missingIdsNotVisible.length) {
        const { data } = await dataProvider.getMany(resource, {
          ids: missingIdsNotVisible,
        });
        if (data) {
          items = [...items, ...(data as T[])];
        }
      }

      setLocalSelectedItems(filterSelectedItems(items, selectedIds || []));
    };

    const missingIds = selectedIds?.filter((id) => !localSelectedItems.has(id)) || [];

    if (missingIds.length) {
      loadMissingSelectedItems(missingIds);
    } else if (localSelectedItems.size !== selectedIds?.length) {
      setLocalSelectedItems(
        filterSelectedItems(
          Array.from(localSelectedItems.values()),
          selectedIds || [],
        ),
      );
    }
  }, [
    resource,
    selectedIds,
    localSelectedItems,
    setLocalSelectedItems,
    filterSelectedItems,
    visibleData,
    isPending,
  ]);

  if (isPending) {
    return <Loading />;
  }

  return (
    <Datagrid
      rowSx={(record) => {
        const selected = selectedIds?.includes(record["@id"]);
        return {
          backgroundColor: selected ? "primary.main" : "",
          "&.MuiTableRow-hover:hover": {
            backgroundColor: selected ? "primary.dark" : "",
          },
          ">td": {
            color: selectedIds?.includes(record.id)
              ? "primary.contrastText"
              : "",
          },
        };
      }}
      selectedIds={selectedIds}
      bulkActionButtons={false}
      rowClick="toggleSelection"
      optimized={optimized}
      onToggleItem={(id: Identifier) => {
        selectionModifiers?.toggle(id);
        if (selectOne) {
          const selection: Identifier[] = [];
          if (!selectedIds?.includes(id)) {
            selection.push(id);
          }
          selectionModifiers?.select(selection);
        }
      }}
    >
      {children}
    </Datagrid>
  );
}
