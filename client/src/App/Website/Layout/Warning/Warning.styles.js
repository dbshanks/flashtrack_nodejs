import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  warning: {
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: "10rem",
    color: "red"
  },
  warningPost: {
    width: "25vw"
  },
  link: {
    color: "#333"
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "yellow"
  }
}));

export default useStyles;
