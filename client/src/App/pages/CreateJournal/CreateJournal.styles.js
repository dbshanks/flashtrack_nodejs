import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: "5rem",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#212121",
    color: "#fafafa",
  },
  titleField: {
    marginBottom: "2rem",
  },
  checkGroup: {
    display: "flex",
  },
});
