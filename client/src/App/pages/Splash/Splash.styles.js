import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  splashPage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    width: "35rem",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    padding: "2rem",
  },
  linkContainer: {
    marginTop: "3rem",
  },
}));
