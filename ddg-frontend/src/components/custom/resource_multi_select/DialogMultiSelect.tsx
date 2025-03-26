import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  type DialogProps,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTranslate } from "react-admin";
import {
  ResourceMultiSelect,
  type MultiSelectRecordType,
  type ResourceMultiSelectProps,
} from "./ResourceMultiSelect";

export type DialogMultiSelectProps<T> = {
  caption: string;
  dialogProps?: DialogProps;
  resourceSelectProps: ResourceMultiSelectProps<T>;
  onClose: () => void;
};

export function DialogMultiSelect<T extends MultiSelectRecordType>(
  props: DialogMultiSelectProps<T>,
) {
  const t = useTranslate();

  const { caption, resourceSelectProps, dialogProps, onClose } = props;

  const { open: dialogOpen, ...dialogRestProps } = dialogProps || {};

  const [open, setOpen] = useState(dialogOpen || false);

  useEffect(() => setOpen(dialogOpen || false), [dialogOpen, setOpen]);

  return (
    <Dialog open={open} fullWidth={true} maxWidth="lg" {...dialogRestProps}>
      <DialogTitle>
        {caption}
        <IconButton
          onClick={() => onClose()}
          title={t("ra.action.close")}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <ResourceMultiSelect {...resourceSelectProps} />
      </DialogContent>

      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={onClose} color="success" variant="contained">
          {t("ra.action.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
