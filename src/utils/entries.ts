import { getFormattedCurrency } from "./numbers";
import { Entry } from "./types";

type Income = Entry;
type Expense = Entry;

export const isIncome = (entry: Entry) => {
  return entry.amount > 0;
}

export const getEntriesTotal = (entries: Entry[]) => {
  return getFormattedCurrency(entries.reduce((acc, entry) => acc + entry.amount, 0))
}

export const getEntriesByType = (entries: Entry[]): [Income[], Expense[]] => {
  return [
    entries.filter((entry) => isIncome(entry)),
    entries.filter((entry) => !isIncome(entry))
  ]
};
