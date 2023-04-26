"use client"
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Balances = () => {
  return (
    <Grid container height="3.375rem">
      <Grid container gap="0.625rem">
        <Grid margin="auto">
          <ArrowUpwardIcon sx={(theme) => ({ fontSize: "2.25rem", fill: theme.palette.success.main })} />
        </Grid>
        <Grid container flexDirection="column" justifyContent="space-between">
          <Grid>
            <Typography>
              Income
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={(theme) => ({ color: theme.palette.success.main })}>
              $0.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container gap="0.625rem">
        <Grid margin="auto">
          <ArrowDownwardIcon sx={(theme) => ({ fontSize: "2.25rem", fill: theme.palette.error.main })} />
        </Grid>
        <Grid container flexDirection="column" justifyContent="space-between">
          <Grid>
            <Typography>
              Expenses
            </Typography>
          </Grid>
          <Grid>
            <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
              $0.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container gap="0.625rem">
        <Grid margin="auto">
          <AccountBalanceIcon />
        </Grid>
        <Grid container flexDirection="column" justifyContent="space-between">
          <Grid>
            <Typography>
              Total Balance
            </Typography>
          </Grid>
          <Grid>
            <Typography>
              $0.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Balances;
