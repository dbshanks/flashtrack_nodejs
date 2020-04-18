import React, { useState, useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Container } from "@material-ui/core";
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
      TweenMax.to(emdrElement, 1, {
        x: 1600,
        repeat: -1,
        ease: Power2.easeInOut,
        yoyo: true
      }).pause()
    );
  }, []);

  return (
    <Container component="main" maxWidth="xl" className={classes.contain}>
      <div
        className={classes.circleEMDR}
        ref={element => {
          emdrElement = element;
        }}
      ></div>

      <div className={classes.motionControllerWrapper}>
        <div className={classes.motionController}>
          <PlayArrow
            className={classes.playerControl}
            onClick={() => animation.play()}
          />
          <Pause
            className={classes.playerControl}
            onClick={() => animation.pause()}
          />
        </div>
      </div>
    </Container>
  );
};

export default EMDR_BALL;
