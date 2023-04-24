"use client"
import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const DateSelector = () => {
  return (
    <Grid container justifyContent="center" gap="1rem">
      <Grid>
        <IconButton>
          <NavigateBeforeIcon />
        </IconButton>
      </Grid>
      <Grid sx={{ margin: "auto 0" }}>
        <Typography variant="h1">
          December 2023
        </Typography>
      </Grid>
      <Grid>
        <IconButton>
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
};

export default DateSelector;
