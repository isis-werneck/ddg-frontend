import { Box, Typography } from "@mui/material";

import { SelectorContextProvider } from "../context/SelectorContextProvider.tsx";
import type { Step } from "../flows.ts";
import { SummaryItem } from "./SummaryItem.tsx";
import { usePdfWizardContext } from "../context/PdfWizardContext.tsx";
import { useTranslate } from "react-admin";

export const SummaryItems = () => {
  const t = useTranslate();
  const { currentFlow } = usePdfWizardContext();

  return (
    <>
      {currentFlow?.label && (
        <Box>
          <Typography variant="caption">
            {t("pages.pdf.summary.document_type")}:
          </Typography>
          <Typography variant="h5">{t(currentFlow?.label)}</Typography>
        </Box>
      )}
      {currentFlow?.steps?.map((step: Step, idx) => {
        return (
          <SelectorContextProvider {...step.context} key={"summary_" + idx}>
            <SummaryItem step={step} />
          </SelectorContextProvider>
        );
      })}
    </>
  );
};
