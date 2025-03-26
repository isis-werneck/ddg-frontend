import { Store } from "@mui/icons-material";
import { useState } from "react";
import { Button, type ButtonProps } from "react-admin";
import {
  DialogMultiSelect,
  type DialogMultiSelectProps,
} from "./DialogMultiSelect";
import { type MultiSelectRecordType } from "./ResourceMultiSelect";

export type DialogMultiSelectButtonProps<T> = Omit<
  DialogMultiSelectProps<T>,
  "onClose"
> & {
  buttonProps?: ButtonProps;
};

export function DialogMultiSelectButton<T extends MultiSelectRecordType>(
  props: DialogMultiSelectButtonProps<T>,
) {
  const { buttonProps, ...rest } = props;

  const [open, setOpen] = useState(false);

  rest.dialogProps = { ...rest.dialogProps, open: open };

  return (
    <>
      <Button
        variant="outlined"
        {...buttonProps}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          if (buttonProps && buttonProps.onClick) {
            buttonProps.onClick(e);
          }
          setOpen(true);
        }}
      >
        <Store />
      </Button>
      <DialogMultiSelect {...rest} onClose={() => setOpen(false)} />
    </>
  );
}
