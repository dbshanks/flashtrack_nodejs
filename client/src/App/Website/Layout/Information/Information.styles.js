import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  information: {
    backgroundColor: "#fff",
    color: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10rem"
  },
  iScreens: {
    maxWidth: "100%"
  },
  rightStage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  caption: {
    textAlign: "center"
  }
}));

export default useStyles;
