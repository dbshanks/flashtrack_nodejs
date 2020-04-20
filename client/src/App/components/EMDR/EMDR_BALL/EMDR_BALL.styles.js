import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contain: {
    height: "94.5vh",
  },
  navigationController: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "5vh",
  },
  ballContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "90vh",
  },
  circleEMDR: {
    marginLeft: "1rem",
    width: "3rem",
    height: "3rem",
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  paper: {
    width: "100%",
    background: "transparent",
  },
  icon: {
    color: "#fafafa",
  },
});

export default useStyles;
