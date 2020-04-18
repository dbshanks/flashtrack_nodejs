import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./Footer.styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footerStage} maxWidth="xl">
      <img src="img/whitelogo.svg" alt="logo" className={classes.logo} />
    </Container>
  );
};

export default Footer;
