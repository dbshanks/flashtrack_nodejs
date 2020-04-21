import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Grid, Typography, Link } from "@material-ui/core";

import { useStyles } from "./SignUp.styles";
import "animate.css/animate.min.css";

export const SignUpWeb = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.signup}>
      <Grid container row>
        <Grid xs={12} lg={6} className={classes.leftStage}>
          <ScrollAnimation animateIn="fadeInLeft" delay={250}>
            <Typography variant="h6">returning clients</Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={250}>
            <Link href="/signin" className={classes.links}>
              <Typography variant="h2">sign in</Typography>
            </Link>
          </ScrollAnimation>
        </Grid>
        <Grid xs={12} lg={6} className={classes.leftStage}>
          <ScrollAnimation animateIn="fadeInRight" delay={250}>
            <Typography variant="h6">new clients</Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={250}>
            <Link href="/signup" className={classes.links}>
              <Typography variant="h2">sign up</Typography>
            </Link>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};
