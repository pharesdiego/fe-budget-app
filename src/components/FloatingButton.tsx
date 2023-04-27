"use client"
import AddIcon from '@mui/icons-material/Add';

import { Fab } from "@mui/material"
import Link from 'next/link';

const FloatingButton = () => {
  return (
    <Fab sx={theme => ({
      position: "fixed",
      bottom: 32,
      right: 32,
      backgroundColor: theme.palette.primary.main,
    })}>
      <Link href="/entry/create">
        <AddIcon sx={theme => ({
          fill: theme.palette.secondary.main
        })} />
      </Link>
    </Fab>
  )
}

export default FloatingButton;
