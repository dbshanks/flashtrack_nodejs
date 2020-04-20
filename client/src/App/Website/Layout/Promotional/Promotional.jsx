import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

import { useStyles } from "./Promotional.styles";
import "animate.css/animate.min.css";

export const Promotional = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.contain}>
      <Grid container spacing={3} className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} lg={6} className={classes.stageLeft}>
          <ScrollAnimation animateIn="fadeIn" delay={250}>
            <Typography variant="h2">always free</Typography>
          </ScrollAnimation>
        </Grid>

        <Grid item xs={12} lg={6} className={classes.stageRight}>
          <ScrollAnimation animateIn="fadeIn" delay={500}>
            <Typography variant="h2">easy signup & use</Typography>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};
