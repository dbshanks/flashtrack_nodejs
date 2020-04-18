import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "#212121",
  },
  card: {
    height: "20rem",
  },
  cardContent: {
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#212121",
  },

  cardAddContent: {
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fafafa",
    background: "#212121",
  },

  addIcon: {
    fontSize: "5rem",
  },
  containerSpacing: {
    background: "#fafafa",
    marginTop: "5rem",
  },
  danger: {
    background: "#333333",
    color: "#fafafa",
  },
  warning: {
    background: "#666666",
    color: "#fff",
  },
  caution: {
    background: "#999999",
    color: "#fff",
  },
});
