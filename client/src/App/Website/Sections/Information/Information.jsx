import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Information.styles";

export const Information = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.information}>
      <Grid container row>
        <Grid xs={12} lg={6} className={classes.leftStage}>
          <ScrollAnimation animateIn="fadeInLeft" delay={250}>
            <img
              src="/img/iScreens.png"
              alt="iScreens"
              className={classes.iScreens}
            />
          </ScrollAnimation>
        </Grid>
        <Grid xs={12} lg={6} className={classes.rightStage}>
          <ScrollAnimation animateIn="fadeInRight" delay={250}>
            <Typography variant="h2" className={classes.caption}>
              available for all devices
            </Typography>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};
