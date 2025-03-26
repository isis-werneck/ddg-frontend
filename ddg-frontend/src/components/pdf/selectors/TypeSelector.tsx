import { FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { CanAccess, useTranslate } from "react-admin";
import { usePdfWizardContext } from "../context/PdfWizardContext";
import { type CoursesType, flows } from "../flows";

export const TypeSelector = () => {
  const t = useTranslate();

  const { type, setType } = usePdfWizardContext();

  const { setFlows, markStepCompleted } = usePdfWizardContext();

  useEffect(() => {
    if (type) {
      setFlows(flows[type]);
    }
    markStepCompleted(!!type);
  }, [type, markStepCompleted, setFlows]);

  return (
    <RadioGroup
      name="type"
      value={type}
      onChange={(e) => {
        setType(e.target.value as CoursesType);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt:{ xs: 0, md: 10}
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} gap={20}>
        <CanAccess resource="download_file_types" action="fp">
          <FormLabel sx={{ cursor: "pointer" }}>
            <Stack direction="column" alignItems={"center"}>
              <Typography variant="h3" fontWeight={"bold"}>
                {t(`pages.pdf.ffe_fp`)}
              </Typography>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                {t(`pages.pdf.ffe_fp_description`)}
              </Typography>
              <Radio value={"fp"}></Radio>
            </Stack>
          </FormLabel>
        </CanAccess>
        <CanAccess resource="download_file_types" action="sepe">
          <FormLabel sx={{ cursor: "pointer" }}>
            <Stack direction="column" alignItems={"center"}>
              <Typography variant="h3" fontWeight={"bold"}>
                {t(`pages.pdf.fct_sepe`)}
              </Typography>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                {t(`pages.pdf.fct_sepe_description`)}
              </Typography>
              <Radio value={"sepe"}></Radio>
            </Stack>
          </FormLabel>
        </CanAccess>
      </Stack>
    </RadioGroup>
  );
};
