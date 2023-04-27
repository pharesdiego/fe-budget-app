"use client"
import { colors } from "@/theme";
import { DateFormats } from "@/utils/dates";
import { formLabelClasses, outlinedInputClasses } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers"
import dayjs from "dayjs";


const DateInput = (props: DatePickerProps<dayjs.Dayjs>) => {
  return (
    <DatePicker<dayjs.Dayjs>
      format={DateFormats.DatePicker}
      slotProps={{
        desktopPaper: {
          sx: theme => ({
            backgroundColor: theme.palette.grey["500"],
            "& .MuiDayCalendar-weekDayLabel": {
              color: theme.palette.grey["300"],
            }
          })
        },
        mobilePaper: {
          sx: theme => ({
            backgroundColor: theme.palette.grey["500"],
            "& .MuiDayCalendar-weekDayLabel": {
              color: theme.palette.grey["300"],
            }
          })
        },
        day: {
          sx: {
            color: colors.white,
          }
        },
        actionBar: {
          sx: {
            color: colors.white,
          }
        },

      }}
      sx={{
        width: "100%",
        [`& .${formLabelClasses.root}`]: {
          typography: "h1",
          height: "2rem",
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: "unset !important"
        },
        [`& .${outlinedInputClasses.input}`]: {
          color: colors.white,
        },
      }}
      {...props}
    />
  )
}

export default DateInput;
