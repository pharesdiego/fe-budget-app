import { baseURL } from "@/utils/constants";
import { APIResponse, Account } from "@/utils/types";

export const getAccounts = async (): Promise<APIResponse<Account[]>> => {

  return await fetch(`${baseURL}/accounts`).then((res) => res.json());
}
