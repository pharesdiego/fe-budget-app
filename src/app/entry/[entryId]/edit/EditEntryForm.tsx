"use client"
import DateInput from "@/components/DateInput";
import SelectInput, { SelectOption } from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Account, Category, Entry } from "@/utils/types";
import { editEntry } from "@/services/entry";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OptionsInput from "@/components/OptionsInput";
import AppButton from "@/components/AppButton";
import dayjs from "dayjs";

interface EditEntryFormProps {
  accounts: Account[];
  categories: Category[];
  entry: Entry;
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


const EditEntryForm = (props: EditEntryFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { accounts, categories, entry } = props;
  const router = useRouter();
  const { handleSubmit, handleChange, setFieldValue, values } = useFormik<FormValues>({
    initialValues: {
      type: entry.amount < 0 ? "expense" : "income",
      amount: String(entry.amount),
      category: Number(entry.category.id),
      account: Number(entry.account.id),
      description: entry.description,
      date: entry.date,
    },
    onSubmit: (values) => {
      setIsEditing(true);

      editEntry({
        id: entry.id,
        amount: +values.amount * (values.type === "expense" ? -1 : 1),
        category: values.category as number,
        account: values.account as number,
        description: values.description,
        date: values.date as string,
      })
        .then(() => router.push("/"))
        .finally(() => setIsEditing(false))
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
            value: values.type,
            onChange: (_, val) => setFieldValue("type", val),
          }}
        />
      </Grid>
      <Grid xs={12}>
        <TextInput
          value={values.amount}
          onChange={handleChange}
          name="amount"
          label="Amount"
          placeholder="Enter amount"
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          SelectProps={{
            value: values.account,
          }}
          onChange={handleChange}
          name="account"
          label="Account"
          placeholder="Choose account"
          options={accountsOptions}
        />
      </Grid>
      <Grid xs={12}>
        <SelectInput
          SelectProps={{
            value: values.category,
          }}
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
          value={dayjs(values.date)}
          onChange={(date) => {
            if (date?.isValid()) {
              setFieldValue("date", date.toISOString())
            }
          }}
        />
      </Grid>
      <Grid xs={12} marginBottom="3rem">
        <TextInput
          value={values.description}
          onChange={handleChange}
          name="description"
          label="Description"
          placeholder="Enter description"
        />
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <AppButton
          variant="text"
          startIcon={<CloseIcon color="secondary" />}
          href="/"
        >
          Cancel
        </AppButton>
        <AppButton
          isWorking={isEditing}
          type="submit"
          variant="contained"
          startIcon={<DoneIcon />}
        >
          Done
        </AppButton>
      </Grid>
    </Grid>
  )
};

export default EditEntryForm;
