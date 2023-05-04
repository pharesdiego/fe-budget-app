"use client"
import { List, Unstable_Grid2 as Grid, Typography, ListItemButton } from "@mui/material";
import { DateFormats, getFormattedDate } from "@/utils/dates";
import { Entry } from "@/utils/types";
import { getFormattedCurrency } from "@/utils/numbers";
import Link from "next/link";

interface EntriesListProps {
  entries: Entry[]
}

const isLessThan0 = (n: number) => n < 0;


const EntriesList = (props: EntriesListProps) => {
  const { entries } = props;

  return (
    <List>
      {entries.map(entry => (
        <ListItemButton LinkComponent={Link} href={`/entry/${entry.id}`} key={entry.id} sx={{ height: "4rem", borderBottom: "2px solid white", padding: 0 }}>
          <Grid container wrap="nowrap" width="100%" gap=".5rem">
            <Grid flexBasis="2.813rem">
              {getFormattedDate(entry.date, DateFormats.EntryDateFormat).split(" ").map((part) =>
                <Typography key={part} textAlign="center">
                  {part}
                </Typography>)}
            </Grid>
            <Grid flexGrow={1} flexBasis={0}>
              <Typography>
                {entry.category.name}
              </Typography>
              <Typography sx={theme => ({
                color: theme.palette.grey["300"],
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              })}>
                {entry.description}
              </Typography>
            </Grid>
            <Grid margin="auto">
              <Typography sx={theme => ({
                color: isLessThan0(entry.amount) ? theme.palette.error.main : theme.palette.success.main
              })}>
                {getFormattedCurrency(entry.amount)}
              </Typography>
            </Grid>
          </Grid>
        </ListItemButton>
      ))}
    </List>
  )
}

export default EntriesList;

