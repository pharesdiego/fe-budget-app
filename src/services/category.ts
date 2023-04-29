import { baseURL } from "@/utils/constants";
import { APIResponse, Category } from "@/utils/types";

export const getCategories = async (): Promise<APIResponse<Category[]>> => {

  return await fetch(`${baseURL}/categories`).then((res) => res.json());
}
