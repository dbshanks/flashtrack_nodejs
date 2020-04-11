import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { useStyles } from "./Dashboard.styles";

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.splashscreen}>
          <img
            src="./img/blacklogo.svg"
            alt="flashtrack logo"
            className={classes.logo}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
