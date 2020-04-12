import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useStyles } from "./Dashboard.styles";
import { AnimationWrapper } from "../../components/AnimationWrapper";

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <AnimationWrapper>
      <Grid container>
        <Grid item xs={12} className={classes.splashscreen}>
          <h1>Dashboard</h1>
        </Grid>
      </Grid>
    </AnimationWrapper>
  );
};
