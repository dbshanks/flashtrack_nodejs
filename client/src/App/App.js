import React, { Fragment } from "react";
import { MainEntry } from "./MainEntry";
import { Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { JournalList } from "./JournalList";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Route exact path="/" component={MainEntry} />
      <Route path="/journals" component={JournalList} />
    </Fragment>
  );
};

export default App;
