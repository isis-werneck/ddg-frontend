import { Title, useTranslate } from "react-admin";

import { Box } from "@mui/material";
import { PdfWizard } from "../components/pdf/PdfWizard";

export const PdfPage = () => {
  const t = useTranslate();

  return (
    <Box>
      <Title title={t("pages.pdf.title")} />
      <PdfWizard />
    </Box>
  );
};
