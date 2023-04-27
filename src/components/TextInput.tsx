"use client"
import { TextField, StandardTextFieldProps } from "@mui/material";

interface TextInputProps extends StandardTextFieldProps { }

const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      fullWidth
      variant="standard"
      InputLabelProps={{
        sx: {
          typography: "h1",
          height: "2rem",
        }
      }}
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
      sx={{
        height: "7.25rem",
        ...props.sx,
      }}
    />
  )
}

export default TextInput;
