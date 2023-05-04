"use client"
import AppButton from "@/components/AppButton";
import OptionsInput from "@/components/OptionsInput";
import TextInput from "@/components/TextInput";
import { createAccount } from "@/services/account";
import { iconMapper } from "@/utils/icons";
import { Done, Close } from "@mui/icons-material";
import { Unstable_Grid2 as Grid } from "@mui/material"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";

const accountOptions = [
  { hideLabel: true, label: "Dollar icon", value: "attach-money", icon: iconMapper["attach-money"] },
  { hideLabel: true, label: "Medical services icon", value: "medical-services", icon: iconMapper["medical-services"] },
  { hideLabel: true, label: "Folder special icon", value: "folder-special", icon: iconMapper["folder-special"] },
  { hideLabel: true, label: "Food icon", value: "food-bank", icon: iconMapper["food-bank"] },
  { hideLabel: true, label: "Home repair icon", value: "home-repair-service", icon: iconMapper["home-repair-service"] },
  { hideLabel: true, label: "Grocery store icon", value: "local-grocery-store", icon: iconMapper["local-grocery-store"] },
  { hideLabel: true, label: "Train icon", value: "train", icon: iconMapper["train"] },
  { hideLabel: true, label: "Wallet icon", value: "account-balance-wallet", icon: iconMapper["account-balance-wallet"] },
  { hideLabel: true, label: "Family icon", value: "escalator-warning", icon: iconMapper["escalator-warning"] },
  { hideLabel: true, label: "Sports icon", value: "sports-tennis", icon: iconMapper["sports-tennis"] },
  { hideLabel: true, label: "Travel icon", value: "airplane-mode-activate", icon: iconMapper["airplane-mode-activate"] },
  { hideLabel: true, label: "Payment icon", value: "payment", icon: iconMapper["payment"] },
];

const validationSchema = object({
  name: string().required(),
  icon: string().required(),
});

const CreateAccountForm = () => {
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();
  const { handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      icon: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsCreating(true);

      createAccount(values)
        .then(() => router.push("/"))
        .finally(() => setIsCreating(false));
    }
  })

  return (
    <Grid container component="form" gap="1rem" onSubmit={handleSubmit}>
      <Grid xs={12}>
        <TextInput
          name="name"
          label="Name"
          placeholder="Write account's name"
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={12} marginBottom="3rem">
        <OptionsInput
          label="Icon"
          radioGroupProps={{
            onChange: (_, val) => setFieldValue("icon", val),
            sx: {
              gap: "1rem",
            }
          }}
          sx={{
            height: "auto",
          }}
          options={accountOptions}
        />
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <AppButton
          variant="text"
          startIcon={<Close color="secondary" />}
          href="/"
        >
          Cancel
        </AppButton>
        <AppButton
          isWorking={isCreating}
          startIcon={<Done />}
          type="submit"
          variant="contained"
        >
          Create
        </AppButton>
      </Grid>
    </Grid>
  )
}

export default CreateAccountForm;
