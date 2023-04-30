import { baseURL } from "@/utils/constants";
import { APIResponse, Category } from "@/utils/types";

export const getCategories = async (): Promise<APIResponse<Category[]>> => {

  return await fetch(`${baseURL}/categories`).then((res) => res.json());
}

export interface CreateCategory {
  name: string;
  icon: string;
}

export const createCategory = async (category: CreateCategory): Promise<string> => {
  const data = new FormData();

  for (const key in category) {
    // @ts-ignore
    data.append(key, String(category[key]));
  }

  return await fetch(`${baseURL}/categories`, {
    method: "POST",
    body: data,
    mode: "no-cors",
    redirect: "follow",
  }).then((res) => res.statusText);
}
