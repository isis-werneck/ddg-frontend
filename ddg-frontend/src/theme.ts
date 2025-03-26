import { deepmerge } from "@mui/utils";
import { lightTheme } from "@api-platform/admin";

export const theme = deepmerge(lightTheme, {
  palette: {
    primary: {
      main: "#38a9b4",
      light: "#e87d7d",
      dark: "#9a3838",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4a90e2",
      light: "#74a9e6",
      dark: "#357ab7",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafafb",
    },
  },
  components: {
    RaAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#38a9b4"
        }
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          "&.RaMenuItemLink-active": {
            borderLeftColor: "#e87d7d",
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        noOptionsText: "Sin resultados",
      }
    }
  },
});
