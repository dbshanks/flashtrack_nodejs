import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  navigationEMDR: {
    position: "absolute",
    bottom: "0",
    height: "6vh",
    width: "100vw",
    backgroundColor: "#333",
    color: "#e0e0e0"
  },
  contain: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  EMDRStage: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },

  controls: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#212121",
    color: "#666"
  },

  circleBoxBlackOne: {
    width: " 2rem",
    height: "2rem",
    borderRadius: "50%",
    border: "2px solid #e0e0e0",
    backgroundColor: "#121212"
  },

  circleBoxBlackTwo: {
    width: " 2rem",
    height: "2rem",
    borderRadius: "50%",
    border: "2px solid #e0e0e0",
    backgroundColor: "#212121"
  },

  circleBoxBlackThree: {
    width: " 2rem",
    height: "2rem",
    borderRadius: "50%",
    border: "2px solid #e0e0e0",
    backgroundColor: "#333333"
  }
}));

export default useStyles;
