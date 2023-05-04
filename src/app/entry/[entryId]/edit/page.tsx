import PageTitle from "@/components/PageTitle";
import { getEntryById } from "@/services/entry";
import EditEntryForm from "./EditEntryForm";
import { getCategories } from "@/services/category";
import { getAccounts } from "@/services/account";

export default async ({ params }: { params: { entryId: string } }) => {
  const { entryId } = params;
  const { data: entry } = await getEntryById(entryId);
  const { data: categories } = await getCategories();
  const { data: accounts } = await getAccounts();

  return (
    <main>
      <PageTitle>
        Edit entry
      </PageTitle>
      <EditEntryForm
        entry={entry}
        categories={categories}
        accounts={accounts}
      />
    </main>
  )
}
