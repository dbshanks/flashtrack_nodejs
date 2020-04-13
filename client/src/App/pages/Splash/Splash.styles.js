import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  splashPage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    maxWidth: "35rem",
    width: "80%",
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
