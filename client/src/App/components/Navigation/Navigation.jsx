import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
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
  Link,
} from "@material-ui/core";
import {
  Menu,
  Add,
  Contacts,
  RecentActors,
  Home,
  Apps,
  FiberManualRecord,
} from "@material-ui/icons";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Website",
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
  {
    listIcon: <FiberManualRecord />,
    listText: "EMDR",
    routePath: "/emdr",
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
              <Link className={classes.sidebarlinks} href={item.routePath}>
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
        <AppBar
          position="fixed"
          elevation={0}
          style={{ backgroundColor: "transparent", mixBlendMode: "difference" }}
        >
          <Toolbar className={classes.toolBar}>
            <Toolbar>
              <Link href="/">
                <img
                  className={classes.logo}
                  src="/img/whitelogo.svg"
                  alt="Flashtrack Logo"
                />
              </Link>

              <Hidden only={["xs", "md"]}>
                <Link href="/journals" className={classes.links}>
                  Journals
                </Link>
                <Link href="/contacts" className={classes.links}>
                  Contacts
                </Link>
                <Link color="primary" href="/emdr" className={classes.links}>
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
                <Menu style={{ color: "#fff" }} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};
