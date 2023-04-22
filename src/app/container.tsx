"use client"
import { Box } from "@/components/Mui";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Box component="body" sx={(theme) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh"
  })}>
    {children}
  </Box>
}

export default Container;
