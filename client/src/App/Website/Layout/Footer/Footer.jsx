import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.footerStage}>
        <img src="img/whitelogo.svg" alt="logo" className={classes.logo} />
      </Grid>
    </Grid>
  );
};
