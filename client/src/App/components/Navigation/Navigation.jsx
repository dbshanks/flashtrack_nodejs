import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileLeftMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Menu,
  Add,
  Contacts,
  RecentActors,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  menuSliderContainer: {
    width: 250,
    background: "#333",
    height: "100vh",
  },
  listItem: {
    color: "#fafafa",
  },
  links: {
    textDecoration: "none",
    color: "#fafafa",
  },
  logo: {
    width: "9rem",
    marginLeft: "1rem",
  },
});

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    routePath: "/",
  },
  {
    listIcon: <Add />,
    listText: "Create Journal",
    routePath: "/create/journals",
  },
  {
    listIcon: <Apps />,
    listText: "Journals",
    routePath: "/journals",
  },
  {
    listIcon: <RecentActors />,
    listText: "Create Contact",
    routePath: "/create/contacts",
  },
  {
    listIcon: <Contacts />,
    listText: "Contacts",
    routePath: "/contacts",
  },
];

export const Navigation = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <img
        className={classes.logo}
        src="/img/whitelogo.svg"
        alt="flashtrack logo"
      />

      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText>
              <Link className={classes.links} to={item.routePath}>
                {item.listText}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Fragment>
      <Box component="nav">
        <AppBar style={{ background: "#212121" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <Menu style={{ color: "#fafafa", marginLeft: "-1.5rem" }} />
            </IconButton>
            <img
              className={classes.logo}
              src="/img/whitelogo.svg"
              alt="Flashtrack Logo"
            />
            <MobileLeftMenuSlider
              open={state.left}
              onClose={toggleSlider("left", false)}
              anchor="left"
            >
              {sideList("left")}
            </MobileLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};
