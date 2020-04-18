import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "100vw",
    background: "#fafafa",
    height: "100vh",
    flexShrink: 0,
  },

  listItem: {
    color: "#212121",
  },
  sidebarLinks: {
    textDecoration: "none",
    color: "#212121",
  },
  logo: {
    width: "9rem",
    marginLeft: "-1rem",
    mixBlendMode: "difference",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    textDecoration: "none",
    marginLeft: "1rem",
    color: "#fff",
    mixBlendMode: "difference",
  },
}));
