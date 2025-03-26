import { Login, LoginForm } from "react-admin";

import { Box } from "@mui/material";
import type { LoginProps } from "react-admin";

export const LoginPage = (props: LoginProps) => {
  return (
    <Login
      {...props}
      sx={{
        [`& .RaLogin-avatar`]: {
          display: "none",
        },
      }}
      backgroundImage="/assets/img/background.jpeg"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <img src="/assets/img/icon.png"></img>
      </Box>
      <LoginForm />
    </Login>
  );
};
