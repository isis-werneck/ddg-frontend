import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useMemo, useRef } from "react";

import { ExpandMore } from "@mui/icons-material";
import dayjs from "dayjs";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { useSelectorContext } from "../context/SelectorContext";
import { useTranslate } from "react-admin";

export const CustomDataInfo = ({ title }: { title?: string }) => {
  const t = useTranslate();
  const { formData } = usePdfWizardContext();
  const { customData } = useSelectorContext();

  const position = useRef(0);

  const validKeys = useMemo(
    () => customData?.map((e) => e.name) || [],
    [customData],
  );

  const renderInfoTitle = (key: string) => {
    if (key.search("_([1-4])") !== -1) {
      const index = parseInt(key.match(/_(\d+)/)?.[1] ?? "", 10);
      if (index > position.current) {
        ++position.current;
        return (
          <Box fontWeight="fontWeightBold" sx={{ mb: 2, mt: 2 }}>
            {t("pages.pdf.custom_info.register") + " " + index}
          </Box>
        );
      }
    }
  };

  const renderInfo = (key: string) => {
    const value = !(
      key.toLowerCase().includes("date") &&
      Date.parse(formData.customData?.[key] || "") > 0
    )
      ? formData.customData?.[key]
      : dayjs(formData.customData?.[key]).format("DD/MM/YYYY");

    if (key.match(/^question\d+$/)) {
      const index = key.replace(/question(\d+)/, "$1");

      return (
        <>
          {index === "1" && (
            <Box fontWeight="fontWeightBold" sx={{ mb: 4 }}>
              {t("pages.pdf.custom_info.evaluation_questionary")}
            </Box>
          )}
          <Box fontWeight="fontWeightBold" display="inline">
            <Typography variant="body2" sx={{ mb: 4 }}>
              {index +
                " - " +
                t("pages.pdf.evaluation_requirements." + key) +
                ": "}
              {value}
            </Typography>
          </Box>
        </>
      );
    }
    return (
      <Box fontWeight="fontWeightBold" display="inline" sx={{ mb: 2 }}>
        <Typography variant="caption">
          {t("pages.pdf.custom_info." + key.replace(/_\d+$/, ""))}:
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {t("pages.pdf.custom_info.values." + value, { _: value })}
        </Typography>
      </Box>
    );
  };

  return (
    formData.customData && (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          {title || t("pages.pdf.custom_info.title")}
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {Object.keys(formData.customData).map((key: string, idx: number) => {
            // remove number suffixes for groups
            const parsedKey = key.replace(/_\d+$/, "");
            return (
              validKeys.includes(parsedKey) && (
                <Box key={"summary_general_data_" + idx}>
                  {renderInfoTitle(key)}
                  {renderInfo(key)}
                </Box>
              )
            );
          })}
        </AccordionDetails>
      </Accordion>
    )
  );
};
