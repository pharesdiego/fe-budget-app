"use client"
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";

export const colors = {
  white: "#FFF",
  black: "#000",
  grey: "#222222",
  lightGrey: "#515151",
  lighterGrey: "#9E9E9E",
  commonBoxShadow: "0px 6px 9px 3px #020202",
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF"
    },
    secondary: {
      main: "#000",
    },
    grey: {
      "300": colors.lighterGrey,
      "400": colors.lightGrey,
      "500": colors.grey,
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
    },
    MuiInputBase: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.grey,
          borderRadius: "10px !important",
          height: "3.5rem",
          marginTop: "0 !important",
          "&.Mui-focused": {
            outline: "#656565 solid 2px",
            boxShadow: "0px 6px 9px 3px #020202",
          },
        },
        input: {
          "&::placeholder": {
            color: "#9E9E9E",
            opacity: 1,
          }
        }
      }
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "1rem",
        },
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: "unset",
          transform: "unset",
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          height: "7.25rem",
          gap: "1rem",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: colors.grey,
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: colors.grey,
          "&.Mui-selected": {
            backgroundColor: colors.lightGrey,
          },
          "&.Mui-disabled": {
            backgroundColor: colors.grey,
            opacity: 0.4,
          }
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.75rem",
          borderRadius: "0.625rem",
          "& svg": {
            fontSize: "24px !important",
          }
        },
        contained: {
          "& svg": {
            fill: colors.black,
          }
        }
      }
    }
  },
});

// eslint-disable-next-line
export default ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
