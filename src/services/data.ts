import { baseURL } from "@/utils/constants"
import { GetEntriesParams } from "./entry";
import { getISODate } from "@/utils/dates";
import { saveAs } from "file-saver";


interface ExportDataParams {
  include: string[];
  format: "csv" | "json";
}

export const exportData = async (params: ExportDataParams): Promise<void> => {
  const { include, format } = params;

  const queryString = include.map((include) => `include[]=${include}`).join("&");

  const data = await fetch(`${baseURL}/export?${queryString}`, {
    headers: {
      Accept: format === "csv" ? "text/csv" : "application/json",
    },
  }).then((res) => res.blob());

  saveAs(data, `export.${format}`);
}
