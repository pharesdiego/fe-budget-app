"use client"

import OptionsInput from "@/components/OptionsInput";
import TextInput from "@/components/TextInput";
import { AccountBalanceWallet, Done, Close, AirplanemodeActive, AttachMoney, EscalatorWarning, FolderSpecial, FoodBank, HomeRepairService, LocalGroceryStore, MedicalServices, Payment, SportsTennis, Train } from "@mui/icons-material";
import { Button, Unstable_Grid2 as Grid } from "@mui/material"
import Link from "next/link";

const categoryOptions = [
  { hideLabel: true, label: "Dollar icon", value: "attach-money", icon: <AttachMoney /> },
  { hideLabel: true, label: "Medical services icon", value: "medical-services", icon: <MedicalServices /> },
  { hideLabel: true, label: "Folder special icon", value: "folder-special", icon: <FolderSpecial /> },
  { hideLabel: true, label: "Food icon", value: "food-bank", icon: <FoodBank /> },
  { hideLabel: true, label: "Home repair icon", value: "home-repair-service", icon: <HomeRepairService /> },
  { hideLabel: true, label: "Grocery store icon", value: "local-grocery-store", icon: <LocalGroceryStore /> },
  { hideLabel: true, label: "Train icon", value: "train", icon: <Train /> },
  { hideLabel: true, label: "Wallet icon", value: "account-balance-wallet", icon: <AccountBalanceWallet /> },
  { hideLabel: true, label: "Family icon", value: "escalator-warning", icon: <EscalatorWarning /> },
  { hideLabel: true, label: "Sports icon", value: "sports-tenis", icon: <SportsTennis /> },
  { hideLabel: true, label: "Travel icon", value: "airplane-mode-activate", icon: <AirplanemodeActive /> },
  { hideLabel: true, label: "Payment icon", value: "payment", icon: <Payment /> },
];


const CreateCategoryForm = () => {
  return (
    <Grid container component="form" gap="1rem">
      <Grid xs={12}>
        <TextInput
          name="name"
          label="Name"
          placeholder="Write category's name"
        />
      </Grid>
      <Grid xs={12} marginBottom="3rem">
        <OptionsInput
          label="Icon"
          radioGroupProps={{
            onChange: (...e) => console.log(e),
            sx: {
              gap: "1rem",
            }
          }}
          sx={{
            height: "auto",
          }}
          options={categoryOptions}
        />
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <Button
          variant="text"
          startIcon={<Close color="secondary" />}
          LinkComponent={Link}
          href="/"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          startIcon={<Done />}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  )
}

export default CreateCategoryForm;
