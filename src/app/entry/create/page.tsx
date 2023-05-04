import PageTitle from "@/components/PageTitle"
import CreateEntryForm from "./CreateEntryForm"
import { getCategories } from "@/services/category"
import { getAccounts } from "@/services/account"


export default async () => {
  const { data: categories } = await getCategories();
  const { data: accounts } = await getAccounts();

  return (
    <main>
      <PageTitle>
        Add entry
      </PageTitle>
      <CreateEntryForm categories={categories} accounts={accounts} />
    </main>
  )
}
