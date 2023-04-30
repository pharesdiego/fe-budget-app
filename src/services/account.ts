import { baseURL } from "@/utils/constants";
import { APIResponse, Account } from "@/utils/types";

export const getAccounts = async (): Promise<APIResponse<Account[]>> => {

  return await fetch(`${baseURL}/accounts`).then((res) => res.json());
}

export interface CreateAccount {
  name: string;
  icon: string;
}

export const createAccount = async (account: CreateAccount): Promise<string> => {
  const data = new FormData();

  for (const key in account) {
    // @ts-ignore
    data.append(key, String(account[key]));
  }

  return await fetch(`${baseURL}/accounts`, {
    method: "POST",
    body: data,
    mode: "no-cors",
    redirect: "follow",
  }).then((res) => res.statusText);
}
