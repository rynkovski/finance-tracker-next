"use client";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#81daa9",
      main: "#40867d",
      dark: "#12542f",
      contrastText: "#fff",
    },
    background: {
      default: "#f4fbf7",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#0F1C2E",
          }),
        }),
      },
    },
  },
});

export default theme;
