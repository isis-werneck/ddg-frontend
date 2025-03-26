import { Upload } from "@mui/icons-material";
import { useState } from "react";
import {
  Button,
  CanAccess,
  useResourceContext,
  type ButtonProps,
} from "react-admin";
import { ImportDialog } from "./ImportDialog";

export const ImportButton = (props: ButtonProps) => {
  const [open, setOpen] = useState(false);

  const resource = useResourceContext();

  // State for dialog and form inputs
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CanAccess resource={resource} action="import">
      <Button {...props} onClick={handleClickOpen} label="import.import_csv">
        <Upload />
      </Button>
      <ImportDialog open={open} onClose={handleClose} />
    </CanAccess>
  );
};
