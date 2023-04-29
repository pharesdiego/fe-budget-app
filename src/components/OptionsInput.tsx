import { FormControl, FormControlLabel, FormControlLabelProps, FormControlProps, FormLabel, Radio, RadioGroup, RadioGroupProps } from "@mui/material";
import { useRef } from "react";

export interface OptionsInputOption extends Omit<FormControlLabelProps, "control" | "value"> {
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control?: React.ReactElement<any, any>;
  value: string;
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
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default OptionsInput;

