import { FormControl, FormControlLabel, FormControlLabelProps, FormControlProps, FormLabel, Radio, RadioGroup, RadioGroupProps, formControlLabelClasses } from "@mui/material";
import React, { useRef } from "react";
import { visuallyHidden } from '@mui/utils';

export interface OptionsInputOption extends Omit<FormControlLabelProps, "control" | "value" | "label"> {
  label: string;
  value: string;
  icon?: React.ReactNode;
  hideLabel?: boolean;
}

interface OptionsInput extends Omit<FormControlProps, "onChange"> {
  label: string;
  options: OptionsInputOption[];
  radioGroupProps?: RadioGroupProps;
}

const OptionsInput = (props: OptionsInput) => {
  const { label, options, radioGroupProps, ...rest } = props;

  return (
    <FormControl {...rest}>
      <FormLabel id={`optionsinput-${label}`}>
        {label}
      </FormLabel>
      <RadioGroup row {...radioGroupProps} aria-labelledby={`optionsinput-${label}`}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio icon={option.icon} checkedIcon={option.icon} sx={theme => ({
              width: "3rem",
              height: "3rem",
              ...(option.hideLabel && {
                "&.Mui-checked": {
                  background: theme.palette.grey["400"],
                },
              }),
            })} />}
            sx={{
              ...(option.hideLabel && {
                [`& .${formControlLabelClasses.label}`]: visuallyHidden,
                marginRight: 0,
                marginLeft: 0,
              }),
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default OptionsInput;

