export type Category = {
  id: string;
  icon: string;
  name: string;
}

export type Account = {
  id: string;
  icon: string;
  name: string;
}

export type Entry = {
  id: string;
  amount: number;
  category: Category;
  account: Account;
  date: string;
  description: string;
}

export type APIResponse<T> = {
  data: T
}
