import React, { useState } from "react";
import { Container, BottomNavigation } from "@material-ui/core";
import EMDR_BALL from "./EMDR_BALL/EMDR_BALL";
import useStyles from "./EMDR.styles";

export const EMDR = () => {
  const classes = useStyles();
  const [color, setColor] = useState("#333333");

  return (
    <Container
      style={{ backgroundColor: color }}
      maxWidth="xl"
      className={classes.contain}
    >
      <EMDR_BALL />

      <BottomNavigation className={classes.navigationEMDR}>
        <div className={classes.controls}>
          <div
            className={classes.circleBoxBlackThree}
            onClick={() => setColor("#333333")}
          ></div>

          <div
            className={classes.circleBoxBlackTwo}
            onClick={() => setColor("#212121")}
          ></div>

          <div
            className={classes.circleBoxBlackOne}
            onClick={() => setColor("#121212")}
          ></div>
        </div>
      </BottomNavigation>
    </Container>
  );
};
