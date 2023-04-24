import DateSelector from "@/components/DateSelector";
import EntriesList from "@/components/EntriesList";
import FloatingButton from "@/components/FloatingButton";

export default async function Home() {
  const { data: entries } = await fetch("http://localhost:4000/api/v1/entries").then(e => e.json());

  return (
    <main>
      <DateSelector />
      <EntriesList entries={entries} />
      <FloatingButton />
    </main>
  )
}
