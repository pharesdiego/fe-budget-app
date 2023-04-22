import dayjs from "dayjs";

export const getFormattedDate = (iso8601: string) => {
  return dayjs(iso8601).format("DD MMM");
}
