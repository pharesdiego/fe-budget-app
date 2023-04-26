"use client"
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF"
    },
    secondary: {
      main: "#000",
    },
    grey: {
      "400": "#9E9E9E",
    },
    error: {
      main: "#FF7C7C",
    },
    success: {
      main: "#96FF7C",
    },
    background: {
      default: "#121212"
    }
  },
  typography: {
    fontFamily: "unset",
    body1: {
      fontSize: "16px",
      lineHeight: "22.08px"
    },
    body2: {
      fontSize: "14px",
      lineHeight: "19.32px",
    },
    button: {
      fontSize: "14px",
      lineHeight: "19.32px",
    },
    h1: {
      fontSize: "20px",
      lineHeight: "27.6px",
    },
    allVariants: {
      color: "#fff"
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#fff",
          verticalAlign: "middle",
          fontSize: "2rem"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#ffffff33",
          },
        }
      }
    }
  }
});

// eslint-disable-next-line
export default ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
