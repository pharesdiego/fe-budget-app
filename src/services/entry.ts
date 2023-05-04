import { baseURL } from "@/utils/constants";
import { ISODate, getISODate } from "@/utils/dates"
import { APIResponse, Entry } from "@/utils/types";

export interface GetEntriesParams {
  from: ISODate;
  until: ISODate;
}

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
  })
};

export const getEntryById = async (entryId: string): Promise<APIResponse<Entry>> => {
  return await fetch(`${baseURL}/entries/${entryId}`, {
    cache: "no-store"
  }).then((res) => res.json());
}

export const deleteEntry = async (entryId: string): Promise<void> => {
  await fetch(`${baseURL}/entries/${entryId}`, {
    method: "DELETE",
  }).then(res => res.text())
}

interface EditEntry extends CreateEntry {
  id: string;
}

export const editEntry = async (entry: EditEntry): Promise<void> => {
  const data = new FormData();
  const { id, ...values } = entry;

  for (const key in values) {
    // @ts-ignore
    data.append(key, String(entry[key]));
  }


  await fetch(`${baseURL}/entries/${id}`, {
    method: "PUT",
    body: data,
  }).then((res) => res.text());
}
