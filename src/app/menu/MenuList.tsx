"use client"
import { colors } from "@/theme";
import { Category, ImportExport, Wallet } from "@mui/icons-material";
import { Box, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

const MenuList = () => {
  return (
    <Box component="ul" display="flex" gap="1.5rem" flexDirection="column">
      {[
        { label: "Create category", icon: <Category />, href: "/category/create" },
        { label: "Create account", icon: <Wallet />, href: "/account/create" },
        { label: "Export/Import", icon: <ImportExport />, href: "/manage-data" },
      ].map((item) => (
        <Link href={item.href} key={item.href} style={{
          textDecoration: "none",
        }}>
          <MenuItem
            sx={(theme) => ({
              height: "3.5rem",
              width: "100%",
              backgroundColor: theme.palette.grey["500"],
              borderRadius: "0.625rem",
              "&:hover": {
                backgroundColor: theme.palette.grey["400"],
                boxShadow: colors.commonBoxShadow,
              },
            })}
          >
            <ListItemIcon sx={{
              "& svg": {
                fontSize: "1.5rem",
              },
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.label}
            </ListItemText>
          </MenuItem>
        </Link>
      ))}
    </Box>
  )
};

export default MenuList;
