"use client"
import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDateQS } from "@/utils/queryParams";
import { DateFormats, getFormattedDate, getNextMonth, getPreviousMonth } from "@/utils/dates";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useDateQS();

  return (
    <Grid container justifyContent="center" gap="1rem">
      <Grid>
        <IconButton
          onClick={() => setSelectedDate(getFormattedDate(getPreviousMonth(selectedDate), DateFormats.QSDateFormat))}
        >
          <NavigateBeforeIcon />
        </IconButton>
      </Grid>
      <Grid sx={{ margin: "auto 0" }}>
        <Typography variant="h1" minWidth="11rem" textAlign="center">
          {getFormattedDate(selectedDate, DateFormats.DateSelectorDateFormat)}
        </Typography>
      </Grid>
      <Grid>
        <IconButton
          onClick={() => setSelectedDate(getFormattedDate(getNextMonth(selectedDate), DateFormats.QSDateFormat))}
        >
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
};

export default DateSelector;
