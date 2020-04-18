import React from "react";

import {
  Container,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

import useStyles from "./Header.styles";
import "animate.css/animate.min.css";

const Header = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.entry}>
      <CssBaseline />

      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid xs={12} sm={12} lg={6}>
          <div>
            <ScrollAnimation
              animateIn="fadeInLeft"
              className={classes.paperOne}
            >
              <Typography variant="h2" className={classes.heading}>
                let us help you break away from the past and remain present
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid xs={12} sm={12} lg={6}>
          <div className={classes.paper}>
            <ScrollAnimation animateIn="fadeInRight">
              <img
                className={classes.iPhoneMockup}
                src="/img/phone.png"
                alt="iPhone"
              />
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
