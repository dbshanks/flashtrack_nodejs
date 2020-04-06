import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { GetAllJournals } from "./pages/GetAllJournals";
import { GetOneJournal } from "./pages/GetOneJournal";
import { UpdateOneJournal } from "./pages/UpdateOneJournal";
import { CreateJournal } from "./pages/CreateJournal";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <CssBaseline />
      <Route exact path="/" component={Dashboard} />
      <Route path="/journals" component={GetAllJournals} />
      <Route path="/create/journals" component={CreateJournal} />
      <Route path="/journal/:id" component={GetOneJournal} />
      <Route path="/journal/update/:id" component={UpdateOneJournal} />
    </Fragment>
  );
};

export default App;
