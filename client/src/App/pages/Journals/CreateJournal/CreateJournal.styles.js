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
    backgroundColor: "#212121",
    color: "#fafafa",
  },
  titleField: {
    marginBottom: "2rem",
  },
  checkGroup: {
    display: "flex",
  },
}));
