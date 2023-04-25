import dayjs from "dayjs";

export enum DateFormats {
  EntryDateFormat = "DD MMM",
  DateSelectorDateFormat = "MMMM YYYY",
  QSDateFormat = "YYYY-MM",
}


export const getFormattedDate = (isoDate: string | dayjs.Dayjs, format: DateFormats) => {
  return dayjs(isoDate).format(format);
}

export const getNextMonth = (isoDate: string) => {
  return dayjs(isoDate).add(1, "month");
}

export const getPreviousMonth = (isoDate: string) => {
  return dayjs(isoDate).add(-1, "month");
}
