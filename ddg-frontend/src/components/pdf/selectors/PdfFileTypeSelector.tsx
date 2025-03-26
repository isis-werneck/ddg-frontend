import {
  Box,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, type ChangeEvent } from "react";
import { CanAccess, useTranslate } from "react-admin";
import { PdfFileType } from "../../../hooks/usePdfFormData";
import { ZoomImage } from "../../custom/common/ZoomImage";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { type FlowType } from "../flows";

export const PdfFileTypeSelector = () => {
  const t = useTranslate();
  const { markStepCompleted, formData, setPartial, flows, setFieldsets } =
    usePdfWizardContext();

  const handleFlowChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPartial({
      fileType: e.target?.value as PdfFileType,
    });
    markStepCompleted(!!e.target?.value);
  };

  useEffect(() => {
    setFieldsets(1);
    markStepCompleted(!!formData.fileType);
  }, [formData.fileType, markStepCompleted, setFieldsets]);

  return (
    <RadioGroup
      onChange={handleFlowChange}
      name={"fileType"}
      value={formData.fileType}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={3}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {flows?.map((flow: FlowType, idx) => (
          <CanAccess
            resource="download_files"
            action={flow.value || ""}
            key={"pdf_selector_" + idx}
          >
            <FormLabel sx={{ cursor: "pointer", width: "210px" }}>
              <Stack
                direction="column"
                alignItems={"center"}
                sx={(theme) => ({
                  background:
                    formData.fileType == flow.value
                      ? theme.palette.primary.main
                      : theme.palette.background.paper,
                  color:
                    formData.fileType == flow.value
                      ? theme.palette.primary.contrastText + "!important"
                      : theme.palette.common.black,
                  borderRadius: "10px",
                  p: 2,
                })}
              >
                {flow.img && (
                  <>
                    <ZoomImage
                      color={"background"}
                      src={flow.img}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    />
                    <Box
                      sx={{
                        height: "200px",
                        width: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={flow.img}
                        style={{ maxHeight: 200, maxWidth: 200 }}
                      />
                    </Box>
                  </>
                )}
                <Typography
                  variant="h5"
                  sx={{ whiteSpace: "pre-wrap", textAlign: "center" }}
                >
                  {t(flow.label || "", { _: flow.label })}
                </Typography>
                <Radio value={flow.value} sx={{ display: "none" }} />
              </Stack>
            </FormLabel>
          </CanAccess>
        ))}
      </Stack>
    </RadioGroup>
  );
};
