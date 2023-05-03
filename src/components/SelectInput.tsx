"use client"
import { TextField, StandardTextFieldProps, MenuItem, Box } from "@mui/material";
import TextInput from "./TextInput";
import { colors } from "@/theme";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectInputProps extends StandardTextFieldProps {
  options: SelectOption[];
}

const SelectInput = (props: SelectInputProps) => {
  const { placeholder, options, ...rest } = props;
  const { SelectProps, ...textInputProps } = rest;
  return (
    <TextInput
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

          return <span>{options.find((option) => option.value === val)?.label}</span>
        },
        ...SelectProps,
      }}
      {...textInputProps}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextInput>
  )
}

export default SelectInput;
