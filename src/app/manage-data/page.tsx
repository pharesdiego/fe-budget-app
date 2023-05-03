import PageTitle from "@/components/PageTitle"
import ManageDataForm from "./ManageDataForm"

export default async () => {
  return (
    <main>
      <PageTitle>
        Export data
      </PageTitle>
      <ManageDataForm />
    </main>
  )
}