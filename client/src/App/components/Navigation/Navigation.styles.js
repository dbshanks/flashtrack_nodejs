import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuSliderContainer: {
    width: "100vw",
    background: "#fafafa",
    height: "100vh",
    flexShrink: 0,
  },

  listItem: {
    color: "#212121",
  },
  links: {
    textDecoration: "none",
    color: "#212121",
  },
  logo: {
    width: "9rem",
    marginLeft: "-1rem",
  },
  toolBar: {
    background: "#fafafa",
    color: "#212121",
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    textDecoration: "none",
    marginLeft: "1rem",
    color: "#212121",
  },
}));
