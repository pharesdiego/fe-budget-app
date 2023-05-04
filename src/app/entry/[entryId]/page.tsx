import PageTitle from "@/components/PageTitle"
import EntryDetails from "./EntryDetails";
import { getEntryById } from "@/services/entry";

export default async ({ params }: { params: { entryId: string } }) => {
  const { entryId } = params;
  const { data: entry } = await getEntryById(entryId);

  return (
    <main>
      <PageTitle>
        Entry details
      </PageTitle>
      <EntryDetails entry={entry} />
    </main>
  )
}