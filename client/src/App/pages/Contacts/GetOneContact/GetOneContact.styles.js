import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
  },
  contactEntry: {
    marginTop: "3rem",
    minHeight: "40rem",
  },
  button: {
    margin: theme.spacing(1),
  },
  iconStage: {
    fontSize: ".9rem",
    marginRight: "1rem",
    color: "#888",
  },
}));
