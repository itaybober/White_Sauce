import { createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css"; // for roboto font
import "@fontsource/roboto/400.css"; // for roboto font
import "@fontsource/roboto/500.css"; // for roboto font
import "@fontsource/roboto/700.css"; // for roboto font
import "@mui/lab/themeAugmentation"; // in order to use ts

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      contrastText: "#f8faf8",
      main: "#D1B067",
      light: "#393948",
      dark: "#25252D",
    },
    secondary: {
      main: "#f89165",
      contrastText: "#ffffff",
      light: "#d0a397",
      dark: "#b66c53",
    },
    background: {
      default: "rgb(30,31,34)",
      paper: "#ffffff",
    },
    text: {
      secondary: "#99bdcc",
      disabled: "#ffffff",
      primary: "#ffffff",
    },
    warning: {
      main: "#ed3202",
    },
    info: {
      main: "#425157",
    },
    success: {
      main: "#29832d",
    },
  },
  typography: {
    fontFamily: '"Didact Gothic", sans-serif !important',
  },
  // mui components -
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          size: 2,
          background: "rgb(37, 37, 45,0.8)",
          text: "primary",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 30px",
          fontSize: "16px",
          size: 2,
          background: "#25252D",
          borderRadius: "10px",
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "8px 30px",
          fontSize: "16px",
          size: 2,
          textTransform: "lowercase",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
