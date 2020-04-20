import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import {
  ImportContacts,
  MenuBook,
  ContactPhone,
  PlayCircleFilled,
} from "@material-ui/icons";

import ScrollAnimation from "react-animate-on-scroll";
import { useStyles } from "./AboutProject.styles";
import "animate.css/animate.min.css";

export const AboutProject = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container row spacing={3}>
        <CssBaseline />
        <Grid xs={12} lg={3} className={classes.gridAlign}>
          <ScrollAnimation animateIn="fadeInUp" delay={250}>
            <ContactPhone className={classes.iconSize} />
            <Typography variant="h5">keep your support system close</Typography>
          </ScrollAnimation>
        </Grid>

        <Grid xs={12} lg={3} className={classes.gridAlign}>
          <ScrollAnimation animateIn="fadeInUp" delay={500}>
            <PlayCircleFilled className={classes.iconSize} />
            <Typography variant="h5">
              escape moments with visual and audio tools
            </Typography>
          </ScrollAnimation>
        </Grid>

        <Grid xs={12} lg={3} className={classes.gridAlign}>
          <ScrollAnimation animateIn="fadeInUp" delay={750}>
            <ImportContacts className={classes.iconSize} />
            <Typography variant="h5">document stressor moments</Typography>
          </ScrollAnimation>
        </Grid>

        <Grid xs={12} lg={3} className={classes.gridAlign}>
          <ScrollAnimation animateIn="fadeInUp" delay={1000}>
            <MenuBook className={classes.iconSize} />
            <Typography variant="h5">review your results</Typography>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
};
