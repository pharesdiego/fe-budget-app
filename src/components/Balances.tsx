"use client"
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Entry } from "@/utils/types";
import { getEntriesByType, getEntriesTotal } from "@/utils/entries";

interface BalancesProps {
  entries: Entry[];
}

const Balances = (props: BalancesProps) => {
  const { entries } = props;
  const [incomes, expenses] = getEntriesByType(entries);

  return (
    <Grid container height="3.375rem" justifyContent="space-between" flexWrap="nowrap">
      <Grid container gap="0.625rem" flexBasis="100%">
        <Grid margin="auto 0">
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
              {getEntriesTotal(incomes)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container gap="0.625rem" flexBasis="100%">
        <Grid margin="auto 0">
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
              {getEntriesTotal(expenses)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container gap="0.625rem" flexBasis="100%">
        <Grid margin="auto 0">
          <AccountBalanceIcon sx={{ fontSize: "2.25rem" }} />
        </Grid>
        <Grid container flexDirection="column" justifyContent="space-between">
          <Grid>
            <Typography>
              Total Balance
            </Typography>
          </Grid>
          <Grid>
            <Typography>
              {getEntriesTotal(entries)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Balances;
