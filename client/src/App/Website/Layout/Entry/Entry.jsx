import React from "react";
import { Header } from "../Header";
import { AboutProject } from "../AboutProject";
import { Information } from "../Information";
import { Promotional } from "../Promotional";
import { SignUpWeb } from "./Layout/SignUpWeb";
import { Footer } from "../Footer";
import { CssBaseline } from "@material-ui/core";

import ScrollAnimation from "react-animate-on-scroll";
import { useStyles } from "./Entry.styles";
import "animate.css/animate.min.css";

export const Entry = () => {
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
