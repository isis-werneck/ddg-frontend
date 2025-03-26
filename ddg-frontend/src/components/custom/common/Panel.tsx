import { Box, Divider, Typography, type BoxProps } from "@mui/material";
import type { Variant } from "@mui/material/styles/createTypography";

export type PanelProps = BoxProps & {
  caption?: string;
  captionVariant?: Variant;
};

export const Panel = (props: PanelProps) => {
  const { children, caption, captionVariant, ...rest } = props;
  return (
    <Box sx={{ backgroundColor: "background.paper", padding: 1 }} {...rest}>
      {!!caption && (
        <>
          <Typography variant={captionVariant || "subtitle1"}>
            {caption}
          </Typography>
          <Divider />
        </>
      )}
      <Box sx={{ padding: "10px 2px" }}>{children}</Box>
    </Box>
  );
};
