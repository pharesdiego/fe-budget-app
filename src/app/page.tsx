import EntriesList from "@/components/EntriesList";

export default async function Home() {
  const { data: entries } = await fetch("http://localhost:4000/api/v1/entries").then(e => e.json());

  return (
    <main>
      <EntriesList entries={entries} />
    </main>
  )
}
