"use client"
import { TextField, StandardTextFieldProps } from "@mui/material";

interface TextInputProps extends StandardTextFieldProps { }

const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      fullWidth
      variant="standard"
      label="Amount"
      placeholder="Input Text"
      InputLabelProps={{
        shrink: true,
        sx: {
          typography: "h1",
          height: "2rem",
          position: "unset",
        }
      }}
      InputProps={{
        disableUnderline: true,
      }}
      sx={{
        height: "7.25rem"
      }}
      {...props}
    />
  )
}

export default TextInput;
