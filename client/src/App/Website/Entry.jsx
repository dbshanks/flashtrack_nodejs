import React from "react";
import {
  Header,
  AboutProject,
  Information,
  Promotional,
  SignUpWeb,
  Footer,
} from "./Layout/index";
import { CssBaseline } from "@material-ui/core";

import ScrollAnimation from "react-animate-on-scroll";
import useStyles from "./Entry.styles";
import "animate.css/animate.min.css";

const Entry = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry}>
      <CssBaseline />
      <ScrollAnimation animateIn="fadeIn">
        <Header />
      </ScrollAnimation>

      <AboutProject />

      <Information />

      <Promotional />

      <SignUpWeb />

      <Footer />
    </div>
  );
};

export default Entry;
