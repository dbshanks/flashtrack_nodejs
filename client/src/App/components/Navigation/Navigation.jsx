import React, { Fragment, useState } from "react";

import { useStyles } from "./Navigation.styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  Hidden,
  Box,
} from "@material-ui/core";
import {
  Menu,
  Add,
  Contacts,
  RecentActors,
  Home,
  Apps,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

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
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText>
              <Link className={classes.sidebarlinks} to={item.routePath}>
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
        <AppBar position="fixed" elevation={4}>
          <Toolbar className={classes.toolBar}>
            <Toolbar>
              <Link to="/">
                <img
                  className={classes.logo}
                  src="/img/blacklogo.svg"
                  alt="Flashtrack Logo"
                />
              </Link>
              <Hidden only={["xs", "md"]}>
                <Link to="/" className={classes.links}>
                  Home
                </Link>
                <Link to="/journals" className={classes.links}>
                  Journals
                </Link>
                <Link to="/contacts" className={classes.links}>
                  Contacts
                </Link>
                <Link color="primary" to="/emdr" className={classes.links}>
                  EMDR
                </Link>
              </Hidden>
            </Toolbar>

            <Drawer
              open={state.left}
              onClose={toggleSlider("left", false)}
              anchor="left"
            >
              {sideList("left")}
            </Drawer>
            <Hidden only={["md", "lg", "xl"]}>
              <IconButton onClick={toggleSlider("left", true)}>
                <Menu style={{ color: "#212121" }} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};
