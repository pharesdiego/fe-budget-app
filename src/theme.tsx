"use client"
import { ThemeProvider } from "@/components/Mui";
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
      "400": "#767676",
    },
    error: {
      main: "#FF7C7C",
    },
    success: {
      main: "#96FF7C",
    },
    background: {
      default: "#000"
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
    allVariants: {
      color: "#fff"
    }
  }
});

export default ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
