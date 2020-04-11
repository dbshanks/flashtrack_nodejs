import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./Splash.styles";

export const Splash = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box component="div" className={classes.splashPage}>
          <img
            src="./img/whitelogo.svg"
            alt="FlashTrack Logo"
            className={classes.logo}
          />
          <Box component="div">
            <Typography variant="h5" className={classes.linkContainer}>
              <Link to="signIn" className={classes.link}>
                Sign In
              </Link>
              <Link to="signIn" className={classes.link}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
