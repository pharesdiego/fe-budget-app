"use client"
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Box component="body" sx={(theme) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    margin: "0 1.5rem",
    marginBottom: "6rem",
    "& > main": {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }
  })}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  </Box>
}

export default Container;
