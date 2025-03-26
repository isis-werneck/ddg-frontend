import { Box, Link, Zoom, type BoxProps } from "@mui/material";

import { ZoomOutMap } from "@mui/icons-material";
import { useState } from "react";

export type ZoomImageProps = BoxProps & {
  src: string;
};

export const ZoomImage = (props: ZoomImageProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const { src, ...rest } = props;
  return (
    <Box sx={{ position: "absolute", left: 4 }} {...rest}>
      <Link onClick={() => setShowImg(true)}>
        <ZoomOutMap
          sx={(theme) => ({
            color: theme.palette.secondary.light,
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.2)",
              color: theme.palette.secondary.main,
            },
            transition: "all 200ms ease-in-out",
          })}
        />
      </Link>

      <Zoom in={showImg}>
        <Box
          sx={{
            zIndex: 100,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={() => setShowImg(false)}
        >
          <img
            src={src}
            style={{
              height: "95%",
              top: "calc(50% + 25px)",
              left: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              border: "3px solid",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Zoom>
    </Box>
  );
};
