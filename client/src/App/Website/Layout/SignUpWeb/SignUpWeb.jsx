import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./SignUp.styles";
import "animate.css/animate.min.css";

const SignUpWeb = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.signup}>
      <Grid container row>
        <Grid xs={12} lg={6} className={classes.leftStage}>
          <ScrollAnimation animateIn="fadeInLeft" delay={250}>
            <Typography variant="h6">returning clients</Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={250}>
            <Link to="/signin">
              <Typography variant="h2">sign in - login</Typography>
            </Link>
          </ScrollAnimation>
        </Grid>
        <Grid xs={12} lg={6} className={classes.leftStage}>
          <ScrollAnimation animateIn="fadeInRight" delay={250}>
            <Typography variant="h6">new clients</Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={250}>
            <Link to="/signup">
              <Typography variant="h2">sign up now</Typography>
            </Link>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpWeb;
