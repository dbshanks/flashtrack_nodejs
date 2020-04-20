import React, { useState, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import {
  Grid,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { PlayArrow, Pause } from "@material-ui/icons";

import useStyles from "./EMDR_BALL.styles.js";

// Below is an unused assigned value. It is a workaround as GSAP needs a reference to CSSPlugin.
// While CSSPlugin is referenced in TweenMax, this is a known issue after running React build tool.
const C = CSSPlugin;

const EMDR_BALL = () => {
  const classes = useStyles();
  let emdrElement = useRef(null);
  let [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(
      gsap
        .to(emdrElement, 1, {
          x: window.innerWidth - 100,
          repeat: -1,
          ease: Power2.easeInOut,
          yoyo: true,
        })
        .pause()
    );
  }, []);

  return (
    <Grid container className={classes.contain}>
      <Grid item xs={12} className={classes.ballContainer}>
        <div
          className={classes.circleEMDR}
          ref={(element) => {
            emdrElement = element;
          }}
        ></div>
      </Grid>
      <Grid item xs={12} className={classes.navigationController}>
        <Box>
          <BottomNavigation showLabels className={classes.paper}>
            <BottomNavigationAction
              label="Play"
              icon={<PlayArrow />}
              onClick={() => animation.play()}
              className={classes.icon}
            />
            <BottomNavigationAction
              label="Pause"
              icon={<Pause />}
              onClick={() => animation.pause()}
              className={classes.icon}
            />
          </BottomNavigation>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EMDR_BALL;
