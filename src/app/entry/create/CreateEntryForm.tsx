"use client"
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import { useFormik } from "formik";
import { boolean, object, string } from "yup";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from "@/theme";

const validationSchema = object({
  type: boolean().required(),
  amount: string().required(),
  category: string().required(),
  date: string().required(),
  description: string().required(),
});


const CreateEntryForm = () => {
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: {},
    onSubmit: () => console.log("dsadsda"),
    validationSchema,
  });

  console.log(values);

  return (
    <Grid container gap="1rem">
      <Grid xs={12}>
        <TextInput
          onChange={handleChange}
          name="amount"
          label="Amount"
          placeholder="Enter amount"
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          onChange={handleChange}
          name="account"
          label="Account"
          placeholder="Choose account"
          options={[
            { label: "First option", value: "first" }
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          onChange={handleChange}
          name="category"
          label="Category"
          placeholder="Choose category"
          options={[
            { label: "First option", value: "first" }
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <DateInput
          label="Date"
          onChange={(date) => {
            if (date?.isValid()) {
              setFieldValue("date", date.toISOString())
            }
          }}
        />
      </Grid>
      <Grid xs={12} marginBottom="3rem">
        <TextInput
          onChange={handleChange}
          name="description"
          label="Description"
          placeholder="Enter description"
        />
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <Button
          variant="text"
          startIcon={<CloseIcon color="secondary" />}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<DoneIcon />}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  )
};

export default CreateEntryForm;
