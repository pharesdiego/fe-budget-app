"use client"
import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography textAlign="center" variant="h1" component="h1">
      {children}
    </Typography>
  )
}

export default PageTitle;
