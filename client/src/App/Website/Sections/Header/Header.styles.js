import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  entry: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20rem",
    marginTop: "5rem",
  },
  logo: {
    width: "30rem",
  },
  buttonStyle: {
    color: "#fff",
    backgroundColor: "#333",
    marginLeft: "2.2rem",
  },
  heading: {
    marginLeft: "2rem",
    textAlign: "right",
  },
  paper: {
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff",
  },
  paperOne: {
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  iPhoneMockup: {
    marginTop: "5rem",
    width: "22rem",
    maxWidth: "100%",
  },
}));
