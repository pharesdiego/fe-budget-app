import TextInput from "@/components/TextInput"
import SelectInput from "@/components/SelectInput"
import DateInput from "@/components/DateInput"
import { Typography } from "@mui/material"
import PageTitle from "@/components/PageTitle"
import CreateEntryForm from "./CreateEntryForm"


export default async () => {
  return (
    <main>
      <PageTitle>
        Add entry
      </PageTitle>
      <CreateEntryForm />
    </main>
  )
}
