import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contain: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center"
  },
  circleEMDR: {
    marginTop: "20rem",
    width: "4rem",
    height: "4rem",
    backgroundColor: "#fff",
    borderRadius: "50%"
  },
  motionControllerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  motionController: {
    width: "10rem"
  },

  playerControl: {
    marginTop: "18rem",
    marginRight: "1rem",
    alignSelf: "center",
    color: "#666",
    fontSize: "3.5rem"
  }
});

export default useStyles;
