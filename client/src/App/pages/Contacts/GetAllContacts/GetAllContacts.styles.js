import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.primary.main,
  },
  card: {
    height: "20rem",
  },
  cardContent: {
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: theme.palette.primary.main,
  },

  cardAddContent: {
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
  },

  addIcon: {
    fontSize: "5rem",
  },
  iconStage: {
    fontSize: ".9rem",
    marginRight: "1rem",
    color: "#888",
  },
  containerSpacing: {
    marginTop: "5rem",
  },
  danger: {
    background: "#333333",
    color: theme.palette.secondary.main,
  },
  warning: {
    background: "#666666",
    color: theme.palette.secondary.main,
  },
  caution: {
    background: "#999999",
    color: theme.palette.secondary.main,
  },
}));
