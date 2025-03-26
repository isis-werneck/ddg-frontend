import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import { SummaryItems } from "./SummaryItems";
import { dataProvider } from "../../../dataProvider";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useState } from "react";
import { useTranslate } from "react-admin";

export const Summary = () => {
  const t = useTranslate();
  const [downloading, setDownloading] = useState<boolean>(false);
  const {
    formData,
    isWizardComplete,
    setIsFileDownloaded,
    isFileDownloaded,
    markStepCompleted,
  } = usePdfWizardContext();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    setErrorMessage(null);
    setIsFileDownloaded(false);
    setDownloading(true);
    dataProvider
      .downloadPdf(formData)
      .then(async (response: Response) => {
        if (response.ok) {
          const disposition = response.headers.get("Content-Disposition");
          const fileName =
            disposition && disposition.match(/filename="([^"]+)"/);
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(await response.blob());
          link.download = fileName?.length
            ? fileName[1]
            : `${formData.fileType}.pdf`;
          link.click();
          setIsFileDownloaded(true);
          markStepCompleted();
        } else {
          setErrorMessage(await response.text());
        }
      })
      .catch((error: Error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setDownloading(false));
  };

  return (
    <>
      {isWizardComplete() && (
        <>
          <Stack direction="column" gap={3}>
            <Alert severity="success">{t("pages.pdf.summary.info")}</Alert>
            <SummaryItems />
            <Box justifyContent={"center"} display={"flex"}>
              <Button
                onClick={handleSubmit}
                variant={"contained"}
                disabled={downloading}
              >
                {t("pages.pdf.download")}
                <CircularProgress
                  sx={{
                    display: downloading ? "block" : "none",
                    position: "absolute",
                  }}
                  size={20}
                  color="secondary"
                />
              </Button>
            </Box>
            {isFileDownloaded && (
              <Snackbar open={isFileDownloaded}>
                <Alert
                  severity="info"
                  onClose={() => setIsFileDownloaded(false)}
                >
                  {t("pages.pdf.download_complete")}
                </Alert>
              </Snackbar>
            )}
            {errorMessage && (
              <Snackbar open={errorMessage ? true : false}>
                <Alert onClose={() => setErrorMessage(null)} severity="error">
                  <Typography variant="h5">
                    {t("pages.pdf.download_error")}
                  </Typography>
                  <Typography variant="body2">{errorMessage}</Typography>
                </Alert>
              </Snackbar>
            )}
          </Stack>
        </>
      )}
      {!isWizardComplete() && (
        <Alert severity="error">{t("pages.pdf.summary.error")}</Alert>
      )}
    </>
  );
};
