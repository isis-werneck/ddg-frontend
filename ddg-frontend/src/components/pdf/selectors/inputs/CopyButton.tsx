import {
  Box,
  IconButton,
  type IconButtonProps,
  type SvgIconOwnProps,
} from "@mui/material";

import { CopyAll } from "@mui/icons-material";
import { useTranslate } from "react-admin";

export const CopyButton = (
  props: Omit<IconButtonProps & SvgIconOwnProps, "children">,
) => {
  const t = useTranslate();
  return (
    <Box alignContent={"center"}>
      <IconButton
        size="small"
        onClick={() => {
          console.warn("onClick not implemented");
        }}
        title={t("pages.pdf.copy_to_all")}
        {...props}
      >
        <CopyAll fontSize="small" color={props.color || "inherit"} />
      </IconButton>
    </Box>
  );
};
