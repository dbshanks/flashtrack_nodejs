import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Error404 } from "./pages/Error404";
import { Dashboard } from "./pages/Dashboard";
import { GetAllJournals } from "./pages/GetAllJournals";
import { GetOneJournal } from "./pages/GetOneJournal";
import { UpdateOneJournal } from "./pages/UpdateOneJournal";
import { CreateJournal } from "./pages/CreateJournal";
import { CssBaseline, Container } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/journals" component={GetAllJournals} />
          <Route path="/create/journals" component={CreateJournal} />
          <Route path="/journal/:id" component={GetOneJournal} />
          <Route path="/journal/update/:id" component={UpdateOneJournal} />

          <Route path="*" component={Error404} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
