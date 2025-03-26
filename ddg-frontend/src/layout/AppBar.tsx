import { Box, type AppBarProps } from "@mui/material";
import {
  AppBarClasses,
  Link,
  AppBar as RaAppBar,
  TitlePortal,
} from "react-admin";
import { AppUserMenu } from "./AppUserMenu";

export const AppBar = (props: AppBarProps) => {
  return (
    <RaAppBar {...props} userMenu={<AppUserMenu />}>
      <Link
        to="#"
        underline="none"
        type=""
        target="_blank"
        rel="noopener"
      >
        <Box
          display={{ xs: "none", sm: "flex" }}
          alignItems="center"
          padding={1}
          className="test"
        >
          <img
            src="/assets/img/head.png"
            alt="Logo"
            height="32px"
            style={{ marginRight: 10 }}
          />
        </Box>
      </Link>
      <TitlePortal className={AppBarClasses.title} />
    </RaAppBar>
  );
};
