"use client"
import AppButton from "@/components/AppButton";
import DataDisplay from "@/components/DataDisplay";
import { deleteEntry } from "@/services/entry";
import { DateFormats, getFormattedDate } from "@/utils/dates";
import { iconMapper } from "@/utils/icons";
import { getFormattedCurrency } from "@/utils/numbers";
import { Entry } from "@/utils/types";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EntryDetailsProps {
  entry: Entry;
}

const EntryDetails = (props: EntryDetailsProps) => {
  const { entry } = props;
  const isExpense = entry.amount < 0;
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const AccountIcon = iconMapper[entry.account.icon];
  const CategoryIcon = iconMapper[entry.category.icon]

  return (
    <Grid container gap="1.5rem">
      <Grid container xs={12} gap="0.75rem" flexWrap="nowrap">
        <Grid xs={6}>
          <DataDisplay
            label="Amount"
            dataProps={{
              sx: theme => ({
                color: isExpense ? theme.palette.error.main : theme.palette.success.main,
              })
            }}
            data={getFormattedCurrency(entry.amount)}
          />
        </Grid>
        <Grid xs={6}>
          <DataDisplay
            label="Date"
            data={getFormattedDate(entry.date, DateFormats.EntryDetails)}
          />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <DataDisplay
          label="Description"
          data={entry.description}
        />
      </Grid>
      <Grid container xs={12} gap="0.75rem" flexWrap="nowrap">
        <Grid xs={6}>
          <DataDisplay
            label="Account"
            startIcon={<AccountIcon />}
            data={entry.account.name}
          />
        </Grid>
        <Grid xs={6}>
          <DataDisplay
            label="Category"
            startIcon={<CategoryIcon />}
            data={entry.category.name}
          />
        </Grid>
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <AppButton
          variant="text"
          isWorking={isDeleting}
          startIcon={<DeleteOutline color="secondary" />}
          onClick={() => {
            setIsDeleting(true);
            deleteEntry(entry.id)
              .then(() => {
                router.push("/");
              })
              .finally(() => setIsDeleting(false));
          }}
        >
          Delete
        </AppButton>
        <AppButton
          variant="text"
          type="submit"
          startIcon={<EditOutlined />}
          href={`/entry/${entry.id}/edit`}
        >
          Edit
        </AppButton>
      </Grid>
    </Grid>
  )
}

export default EntryDetails;
