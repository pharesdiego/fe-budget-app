"use client"
import { pacifico } from "@/app/fonts";
import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

interface TopbarProps { }

const Topbar = (props: TopbarProps) => {
  return (
    <Grid
      container
      component="header"
      justifyContent="space-between"
      height="3.5rem"
      alignContent="center"
      marginBottom="1.5rem"
    >
      <Grid margin="auto 0">
        <Link href="/" style={{
          textDecoration: "none"
        }}>
          <Typography component="span" className={pacifico.className} sx={{
            fontSize: "1.125rem",
            lineHeight: "1.978rem"
          }}>
            Veloz Budget
          </Typography>
        </Link>
      </Grid>
      <Grid>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Topbar;
