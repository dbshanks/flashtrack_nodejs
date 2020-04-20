import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    minWidth: 200,
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  titleField: {
    marginBottom: "2rem",
  },
  checkGroup: {
    display: "flex",
  },
}));
