import {
  Button,
  ButtonProps,
  useListContext
} from "react-admin";

import { useMultiSelection } from "../../../hooks/useMultiSelection";

export type SelectAllButtonProps = ButtonProps & {
  resource: string;
};

export const SelectAllButton = ({
  resource,
  ...rest
}: SelectAllButtonProps) => {
  const { data } = useListContext();
  const [selectedIds, { select }] = useMultiSelection({
    resource,
  });

  const allVisibleSelected = !data?.some(
    (item) => !selectedIds.includes(item.id),
  );

  return (
    <Button
      {...rest}
      label="ra.action.select_all"
      onClick={() => {
        const visibleIds = data?.map((item) => item.id) || [];
        if (allVisibleSelected) {
          select(selectedIds.filter((id) => !visibleIds.includes(id)));
        } else {
          const newSelectedIds = [...new Set([...selectedIds, ...visibleIds])];
          select(newSelectedIds);
        }
      }}
    />
  );
};
