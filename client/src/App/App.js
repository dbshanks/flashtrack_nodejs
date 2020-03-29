import React, { Fragment } from "react";
import { MainEntry } from "./MainEntry";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={MainEntry} />
    </Fragment>
  );
};

export default App;
