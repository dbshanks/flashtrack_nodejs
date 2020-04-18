import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  signup: {
    height: "50vh",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  leftStage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  rightStage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

export default useStyles;
