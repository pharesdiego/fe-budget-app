import { ISODate, getISODate } from "@/utils/dates"
import { APIResponse, Entry } from "@/utils/types";

interface GetEntriesParams {
  from: ISODate;
  until: ISODate;
}

const baseURL = "http://localhost:4000/api/v1"

export const getEntries = async (params: GetEntriesParams): Promise<APIResponse<Entry[]>> => {
  const { from, until } = params;

  const queryString = new URLSearchParams({
    from: getISODate(from),
    until: getISODate(until),
  });


  return await fetch(`${baseURL}/entries?${queryString.toString()}`, {
    cache: "no-store",
  }).then((res) => res.json());
}

type ID = number;

export interface CreateEntry {
  amount: number;
  category: ID;
  account: ID;
  date: string;
  description: string;
}

export const createEntry = async (entry: CreateEntry) => {
  const data = new FormData();

  for (const key in entry) {
    // @ts-ignore
    data.append(key, String(entry[key]));
  }

  return await fetch(`${baseURL}/entries`, {
    method: "POST",
    body: data,
    mode: "no-cors",
    redirect: "follow",
  })
};
