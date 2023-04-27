"use client"
import { TextField, StandardTextFieldProps, MenuItem, Box } from "@mui/material";
import TextInput from "./TextInput";
import { colors } from "@/theme";

interface SelectInputProps extends StandardTextFieldProps { }

const SelectInput = (props: SelectInputProps) => {
  const { placeholder } = props;

  return (
    <TextInput
      label="Account"
      select
      SelectProps={{
        defaultValue: "",
        displayEmpty: true,
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: colors.grey,
            }
          }
        },
        renderValue: (val) => {
          if (val === "") {
            return <Box component="span" sx={(theme) => ({
              color: theme.palette.grey["300"]
            })}>{placeholder}</Box>
          }

          return <p>{val}</p>
        }
      }}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      <MenuItem value="Bank">
        Bank
      </MenuItem>
      <MenuItem value="Savings">
        Savings
      </MenuItem>
      <MenuItem value="Other">
        Other
      </MenuItem>
    </TextInput>
  )
}

export default SelectInput;
