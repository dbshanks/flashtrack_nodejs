import React, { Fragment, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./Navigation.styles";
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
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <img
              className={classes.logo}
              src="/img/blacklogo.svg"
              alt="Flashtrack Logo"
            />
            <Drawer
              open={state.left}
              onClose={toggleSlider("left", false)}
              anchor="left"
            >
              {sideList("left")}
            </Drawer>

            <IconButton onClick={toggleSlider("left", true)}>
              <Menu style={{ color: "#212121" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};
