"use client"
import { ListItem, List, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { getFormattedDate } from "@/utils/dates";
import { Entry } from "@/utils/types";

interface EntriesListProps {
  entries: Entry[]
}

const isLessThan0 = (n: number) => n < 0;


const EntriesList = (props: EntriesListProps) => {
  const { entries } = props;

  return (
    <List>
      {entries.map(entry => (
        <ListItem key={entry.id} sx={{ height: "4rem", borderBottom: "2px solid white", padding: 0 }}>
          <Grid container wrap="nowrap" width="100%" gap=".5rem">
            <Grid flexBasis="2.813rem">
              {getFormattedDate(entry.date).split(" ").map((part) =>
                <Typography key={part} textAlign="center">
                  {part}
                </Typography>)}
            </Grid>
            <Grid flexGrow={1} flexBasis={0}>
              <Typography>
                {entry.category.name}
              </Typography>
              <Typography sx={theme => ({
                color: theme.palette.grey["400"],
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              })}>
                {entry.description}
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={theme => ({
                color: isLessThan0(entry.amount) ? theme.palette.error.main : theme.palette.success.main
              })}>
                {entry.amount}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  )
}

export default EntriesList;

