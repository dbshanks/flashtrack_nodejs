import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
  },
  journalEntry: {
    marginTop: "3rem",
    minHeight: "40rem",
  },
  button: {
    margin: theme.spacing(1),
  },
}));
