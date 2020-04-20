import React, { useState } from "react";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import EMDR_BALL from "./EMDR_BALL/EMDR_BALL";
import useStyles from "./EMDR.styles";

export const EMDR = () => {
  const classes = useStyles();
  const [color, setColor] = useState("#212121");

  return (
    <Grid container style={{ backgroundColor: color, height: "100vh" }}>
      <Grid item xs={12}>
        <EMDR_BALL />
      </Grid>
      <Grid item xs={12}>
        <BottomNavigation showLabels className={classes.navigation}>
          <BottomNavigationAction
            label="Lighter"
            className={classes.icon}
            icon={<FiberManualRecord onClick={() => setColor("#333333")} />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Medium"
            className={classes.icon}
            icon={<FiberManualRecord onClick={() => setColor("#212121")} />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Darker"
            className={classes.icon}
            icon={<FiberManualRecord onClick={() => setColor("#121212")} />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};
