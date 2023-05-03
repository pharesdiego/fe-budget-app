import { baseURL } from "@/utils/constants"
import { GetEntriesParams } from "./entry";
import { getISODate } from "@/utils/dates";


interface ExportDataParams extends Omit<GetEntriesParams, "type"> {
  include?: string[]
}

export const exportData = async (params: ExportDataParams) => {
  const { from, until, include } = params;

  const queryString = new URLSearchParams({
    from: getISODate(from),
    until: getISODate(until),
  });

  return await fetch(`${baseURL}/export?${queryString.toString()}`, {
    mode: "no-cors",
    method: "POST",
  });
}
