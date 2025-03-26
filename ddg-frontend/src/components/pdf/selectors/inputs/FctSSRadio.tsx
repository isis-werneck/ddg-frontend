import { FormLabel, Radio, Typography } from "@mui/material";

import { useTranslate } from "react-admin";

export const FctSSRadio = ({ value }: { value: "company" | "center" }) => {
  const t = useTranslate();
  return (
    <FormLabel
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        my: 2,
      }}
    >
      <Radio value={value} sx={{ pt: 0.2, mr: 1 }} />
      <Typography>
        {t("pages.pdf.custom_info.ssResponsibles." + value)}
      </Typography>
    </FormLabel>
  );
};
