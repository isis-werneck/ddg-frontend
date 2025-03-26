import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  type DialogProps,
} from "@mui/material";
import {
  useDataProvider,
  useNotify,
  useRefresh,
  useResourceContext,
  useTranslate,
} from "react-admin";

import { Close, ExpandMore, Upload } from "@mui/icons-material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

export const ImportDialog = (props: DialogProps & { onClose: () => void }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const t = useTranslate();

  const dataProvider = useDataProvider();
  const resource = useResourceContext();

  const { onClose } = props;

  const [file, setFile] = useState<File | null>(null);
  const [delimiter, setDelimiter] = useState(";");
  const [enclosure, setEnclosure] = useState('"');
  const [escape, setEscape] = useState("\\");
  const [encoding, setEncoding] = useState("ISO-8859-1");

  // Handle file change
  const handleFileChange = (file: File | null) => {
    setFile(file);
  };

  // Handle form submission
  const handleSubmit = async () => {
    notify("import.importing");
    if (!file) {
      notify("import.select_file", { type: "warning" });
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("delimiter", delimiter);
    formData.append("enclosure", enclosure);
    formData.append("escape", escape);
    formData.append("encoding", encoding);

    try {
      // Make API request to the backend
      const response = await dataProvider.import(resource, formData);
      const responseData = await response.json();
      if (response.status === 201 && !responseData.errors?.length) {
        notify("import.success", { type: "success" });
        refresh();
        onClose();
      } else {
        if (responseData.errors?.length) {
          notify("import.errors", {
            type: "error",
            messageArgs: { message: responseData.errors.join("\n") },
            multiLine: true,
          });
        } else {
          notify("import.error", { type: "error" });
        }
      }
    } catch (error) {
      notify("import.error", { type: "error" });
    }
  };

  const handleDownloadTemplate = async () => {
    await dataProvider.downloadCsvTemplate(resource,
      t(`resources.${resource}.name`, 2) + ".csv",
      {
        delimiter,
        enclosure,
        encoding
      }
    );
  };

  return (
    <Dialog {...props}>
      <DialogTitle>
        {t("import.import_csv")}
        {" - "}
        {t(`resources.${resource}.name`, 2)}
        <IconButton
          onClick={onClose}
          title={t("import.close")}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* File Input */}
          <Grid item xs={12}>
            <MuiFileInput
              name={"file"}
              value={file}
              inputProps={{ accept: [".csv"] }}
              onChange={handleFileChange}
              placeholder={t("import.select_file")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                {t("import.options")}
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {/* Delimiter Input */}
                  <Grid item xs={12}>
                    <InputLabel>{t("import.delimiter")}</InputLabel>
                    <Select
                      fullWidth
                      label={null}
                      value={delimiter}
                      onChange={(e) => setDelimiter(e.target.value)}
                      color="secondary"
                    >
                      <MenuItem value=";">;</MenuItem>
                      <MenuItem value=",">,</MenuItem>
                      <MenuItem value="|">|</MenuItem>
                    </Select>
                  </Grid>

                  {/* Enclosure Input */}
                  <Grid item xs={12}>
                    <InputLabel>{t("import.enclosure")}</InputLabel>
                    <Select
                      label={null}
                      value={enclosure}
                      onChange={(e) => setEnclosure(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value={'"'}>{'"'}</MenuItem>
                      <MenuItem value={"'"}>{"'"}</MenuItem>
                    </Select>
                  </Grid>

                  {/* Escape Input */}
                  <Grid item xs={12}>
                    <TextField
                      label={t("import.escape")}
                      value={escape}
                      onChange={(e) => setEscape(e.target.value)}
                      margin="normal"
                    />
                  </Grid>

                  {/* Encoding Input */}
                  <Grid item xs={12}>
                    <InputLabel>{t("import.encoding")}</InputLabel>
                    <Select
                      label={null}
                      value={encoding}
                      onChange={(e) => setEncoding(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value={'ISO-8859-1'}>{'ISO-8859-1'}</MenuItem>
                      <MenuItem value={'ISO-8859-15'}>{'ISO-8859-15'}</MenuItem>
                      <MenuItem value={"UTF-8"}>{"UTF-8"}</MenuItem>
                      <MenuItem value={"Windows-1252"}>{"Windows-1252"}</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item>
            <Button onClick={handleDownloadTemplate}>
              <>{t("import.download_template")}</>
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {onClose && (
          <Button onClick={onClose} color="warning" variant="outlined">
            {t("import.cancel")}
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          color="success"
          variant="outlined"
          startIcon={<Upload />}
        >
          {t("import.import")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
