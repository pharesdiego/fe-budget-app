import Balances from "@/components/Balances";
import DateSelector from "@/components/DateSelector";
import EntriesList from "@/components/EntriesList";
import FloatingButton from "@/components/FloatingButton";
import { getEntries } from "@/services/entries";
import { getEndOfMonth, getISODate, getStartOfMonth, getToday } from "@/utils/dates";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined }; }) {
  const { date } = searchParams;

  const { data: entries } = await getEntries({
    from: getISODate(getStartOfMonth(date || getToday())),
    until: getISODate(getEndOfMonth(date || getToday())),
  });

  return (
    <main>
      <DateSelector />
      <Balances />
      <EntriesList entries={entries} />
      <FloatingButton />
    </main>
  )
}
