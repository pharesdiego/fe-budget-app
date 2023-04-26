import dayjs from "dayjs";

export enum DateFormats {
  EntryDateFormat = "DD MMM",
  DateSelectorDateFormat = "MMMM YYYY",
  QSDateFormat = "YYYY-MM",
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

export const getToday = () => dayjs();

export const getStartOfMonth = (date: ISODate) => {
  return dayjs(date).startOf("month");
}

export const getEndOfMonth = (date: ISODate) => {
  return dayjs(date).endOf("month");
}
