import React, { Fragment } from "react";
import { MainEntry } from "./MainEntry";
import { Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { JournalList } from "./JournalList";
import { JournalEntry } from "./JournalEntry";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Route exact path="/" component={MainEntry} />
      <Route path="/journals" component={JournalList} />
      <Route path="/journal/:id" component={JournalEntry} />
    </Fragment>
  );
};

export default App;
