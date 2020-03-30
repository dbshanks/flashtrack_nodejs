import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Dashboard } from "./Dashboard";
import { GetAllJournals } from "./GetAllJournals";
import { GetOneJournal } from "./GetOneJournal";
import { UpdateOneJournal } from "./UpdateOneJournal";
import { CreateJournal } from "./CreateJournal";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Route exact path="/" component={Dashboard} />
      <Route path="/journals" component={GetAllJournals} />
      <Route path="/create/journals" component={CreateJournal} />
      <Route path="/journal/:id" component={GetOneJournal} />
      <Route path="/journal/update/:id" component={UpdateOneJournal} />
    </Fragment>
  );
};

export default App;
