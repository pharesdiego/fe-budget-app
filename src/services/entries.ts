import { ISODate, getISODate } from "@/utils/dates"

interface GetEntriesParams {
  from: ISODate;
  until: ISODate;
}

const baseURL = "http://localhost:4000/api/v1"

export const getEntries = async (params: GetEntriesParams) => {
  const { from, until } = params;

  const queryString = new URLSearchParams({
    from: getISODate(from),
    until: getISODate(until),
  });


  return await fetch(`${baseURL}/entries?${queryString.toString()}`).then((res) => res.json());
}
