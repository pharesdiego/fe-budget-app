"use client"
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Unstable_Grid2 as Grid } from "@mui/material";

const CreateEntryForm = () => {
  return (
    <Grid container gap="1rem">
      <Grid xs={12}>
        <TextInput
          label="Amount"
          placeholder="Enter amount"
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          label="Account"
          placeholder="Choose account"
          options={[
            { label: "First option", value: "first" }
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          label="Category"
          placeholder="Choose category"
          options={[
            { label: "First option", value: "first" }
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <DateInput label="Date" />
      </Grid>
      <Grid xs={12}>
        <TextInput label="Description" placeholder="Enter description" />
      </Grid>
    </Grid>
  )
};

export default CreateEntryForm;
