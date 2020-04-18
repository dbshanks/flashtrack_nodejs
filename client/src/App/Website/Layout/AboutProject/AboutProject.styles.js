import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    color: "#333",
    marginBottom: "20rem"
  },

  iconSize: {
    color: "#ccc",
    fontSize: "10rem"
  },
  gridAlign: {
    textAlign: "center"
  }
}));

export default useStyles;
