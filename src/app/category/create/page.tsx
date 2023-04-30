import PageTitle from "@/components/PageTitle"
import CreateCategoryForm from "./CreateCategoryForm"

export default async () => {
  return (
    <main>
      <PageTitle>
        Create category
      </PageTitle>
      <CreateCategoryForm />
    </main>
  )
}
