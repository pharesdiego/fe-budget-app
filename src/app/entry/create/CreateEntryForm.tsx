"use client"
import DateInput from "@/components/DateInput";
import SelectInput, { SelectOption } from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Account, Category } from "@/utils/types";
import { createEntry } from "@/services/entry";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OptionsInput from "@/components/OptionsInput";
import { getISODate, getToday } from "@/utils/dates";
import Link from "next/link";

interface CreateEntryFormProps {
  accounts: Account[];
  categories: Category[];
}

const validationSchema = object({
  type: string().required().oneOf(["income", "expense"]),
  amount: number().required(),
  category: number().required(),
  account: number().required(),
  date: string().required(),
  description: string().required(),
});

interface FormValues {
  type: "expense" | "income",
  amount: string;
  category: number | undefined;
  account: number | undefined;
  description: string;
  date: string | undefined;
}


const CreateEntryForm = (props: CreateEntryFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const { accounts, categories } = props;
  const router = useRouter();
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik<FormValues>({
    initialValues: {
      type: "expense",
      amount: "",
      category: undefined,
      account: undefined,
      description: "",
      date: getISODate(getToday()),
    },
    onSubmit: (values) => {
      setIsCreating(true);

      createEntry({
        amount: +values.amount * (values.type === "expense" ? -1 : 1),
        category: values.category as number,
        account: values.account as number,
        description: values.description,
        date: values.date as string,
      })
        .then(() => router.push("/"))
        .finally(() => setIsCreating(false))
    },
    validationSchema,
  });


  const accountsOptions = accounts.map((account) => ({
    label: account.name,
    value: account.id,
  })) as SelectOption[];

  const categoriesOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  })) as SelectOption[];

  return (
    <Grid component="form" container gap="1rem" onSubmit={handleSubmit}>
      <Grid xs={12}>
        <OptionsInput
          sx={{
            height: "5.25rem"
          }}
          label="Type"
          options={[
            { label: "Expense", value: "expense" },
            { label: "Income", value: "income" },
          ]}
          radioGroupProps={{
            defaultValue: "expense",
            onChange: (_, val) => setFieldValue("type", val),
          }}
        />
      </Grid>
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
          options={accountsOptions}
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          onChange={handleChange}
          name="category"
          label="Category"
          placeholder="Choose category"
          options={categoriesOptions}
        />
      </Grid>
      <Grid xs={12}>
        <DateInput
          label="Date"
          defaultValue={getToday()}
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
          LinkComponent={Link}
          href="/"
        >
          Cancel
        </Button>
        <Button
          disabled={isCreating}
          type="submit"
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
