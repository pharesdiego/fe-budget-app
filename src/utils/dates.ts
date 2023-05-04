import dayjs from "dayjs";

export enum DateFormats {
  EntryDateFormat = "DD MMM",
  DateSelectorDateFormat = "MMMM YYYY",
  QSDateFormat = "YYYY-MM",
  DatePicker = "DD/MM/YYYY",
  EntryDetails = "DD MMMM YYYY"
}

export type ISODate = string | dayjs.Dayjs


export const getFormattedDate = (date: ISODate, format: DateFormats) => {
  return dayjs(date).format(format);
}

export const getNextMonth = (date: ISODate) => {
  return dayjs(date).add(1, "month");
}

export const getPreviousMonth = (date: ISODate) => {
  return dayjs(date).add(-1, "month");
}

export const getISODate = (date: ISODate) => {
  return dayjs(date).toISOString();
}

export const getToday = () => dayjs().startOf("day");

export const getStartOfMonth = (date: ISODate) => {
  return dayjs(date).startOf("month");
}

export const getEndOfMonth = (date: ISODate) => {
  return dayjs(date).endOf("month");
}
