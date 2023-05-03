import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormControlLabelProps, FormControlProps, FormGroup, FormGroupProps, FormLabel } from "@mui/material"
import { useEffect, useState } from "react";

export interface CheckboxesInputOption extends Omit<FormControlLabelProps, "control" | "value" | "label"> {
  label: string;
  value: string;
  checkboxProps?: CheckboxProps;
}

interface CheckboxesInputProps extends Omit<FormControlProps, "onChange"> {
  label: string;
  options: CheckboxesInputOption[];
  onChange: (options: string[]) => void;
  defaultSelectedOptions?: string[];
}

const CheckboxesInput = (props: CheckboxesInputProps) => {
  const { options, defaultSelectedOptions, onChange, label, ...rest } = props;
  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions || []);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions.length]);

  return (
    <FormControl
      {...rest}
      fullWidth
      onChange={(e) => {
        const val = e.target?.value;

        setSelectedOptions(
          (options) => selectedOptions.includes(val) ? options.filter((option) => option !== val) : options.concat(val)
        )
      }}
    >
      <FormLabel id={`checkboxesinput-${label}`}>
        {label}
      </FormLabel>
      <FormGroup
        row
        aria-labelledby={`checkboxesinput-${label}`}
        sx={(theme) => ({
          backgroundColor: theme.palette.grey["500"],
          borderRadius: "0.625rem",
          padding: ".5rem",
        })}
      >
        {options.map(({ checkboxProps, ...option }) => (
          <FormControlLabel
            key={option.value}
            {...option}
            control={<Checkbox {...checkboxProps} checked={selectedOptions.includes(option.value)} />}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}

export default CheckboxesInput;

