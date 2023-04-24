"use client"
import AddIcon from '@mui/icons-material/Add';

import { Fab } from "@mui/material"

const FloatingButton = () => {
  return (
    <Fab sx={theme => ({
      position: "fixed",
      bottom: 32,
      right: 32,
      backgroundColor: theme.palette.primary.main,
    })}>
      <AddIcon sx={theme => ({
        fill: theme.palette.secondary.main
      })} />
    </Fab>
  )
}

export default FloatingButton;
