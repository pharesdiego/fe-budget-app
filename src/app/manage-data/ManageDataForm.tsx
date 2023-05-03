"use client"
import AppButton from "@/components/AppButton"
import CheckboxesInput from "@/components/CheckboxesInput"
import SelectInput from "@/components/SelectInput"
import { exportData } from "@/services/export"
import { baseURL } from "@/utils/constants"
import { UploadOutlined } from "@mui/icons-material"
import { Unstable_Grid2 as Grid } from "@mui/material"
import { useFormik } from "formik"
import { array, object, string } from "yup"

const validationSchema = object({
  format: string().oneOf(["csv", "json"]).required(),
  include: array().of(string()).required(),

})

const ManageDataForm = () => {
  const { handleChange, handleSubmit, setFieldValue } = useFormik({
    validationSchema,
    initialValues: {
      format: "csv",
      include: ["income", "expense"]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <Grid container component="form" gap="1rem" onSubmit={handleSubmit}>
      <Grid xs={12}>
        <SelectInput
          label="Format"
          name="format"
          onChange={handleChange}
          placeholder="Select data's format"
          SelectProps={{
            defaultValue: "csv",
          }}
          options={[
            { label: "CSV", value: "csv" },
            { label: "JSON", value: "json" },
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <CheckboxesInput
          label="Include"
          defaultSelectedOptions={["income", "expense"]}
          onChange={(values) => {
            setFieldValue("include", values);
          }}
          options={[
            { label: "Income", value: "income" },
            { label: "Expense", value: "expense" },
          ]}
        />
      </Grid>
      <Grid display="flex" width="100%" justifyContent="end" gap="1rem">
        <AppButton
          type="submit"
          variant="contained"
          startIcon={<UploadOutlined />}
        >
          Export
        </AppButton>
      </Grid>
    </Grid>
  )
}

export default ManageDataForm;
