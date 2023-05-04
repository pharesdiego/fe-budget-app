import { Unstable_Grid2 as Grid, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface DataDisplayProps {
  label: string;
  data: React.ReactNode;
  labelProps?: TypographyProps;
  dataProps?: TypographyProps;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const DataDisplay = (props: DataDisplayProps) => {
  const { label, data, labelProps, dataProps, startIcon, endIcon } = props;

  return (
    <Grid container direction="column" gap="1rem">
      <Grid>
        <Typography {...labelProps}>
          {label}
        </Typography>
      </Grid>
      <Grid
        container
        gap="0.75rem"
        sx={theme => ({
          padding: (startIcon || endIcon) ? "0.75rem" : "1rem",
          borderRadius: "10px",
          backgroundColor: theme.palette.grey["500"]
        })}
      >
        {startIcon && (
          <Grid>
            {startIcon}
          </Grid>
        )}
        <Grid margin="auto 0" marginRight="auto">
          <Typography {...dataProps}>
            {data}
          </Typography>
        </Grid>
        {endIcon && (
          <Grid>
            {endIcon}
          </Grid>
        )}
      </Grid>
    </Grid>
  )
};

export default DataDisplay;
