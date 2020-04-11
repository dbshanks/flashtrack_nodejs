import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Error404 } from "./pages/Error404";
import { Dashboard } from "./pages/Dashboard";
import { GetAllJournals } from "./pages/Journals/GetAllJournals";
import { GetOneJournal } from "./pages/Journals/GetOneJournal";
import { UpdateOneJournal } from "./pages/Journals/UpdateOneJournal";
import { CreateJournal } from "./pages/Journals/CreateJournal";
import { GetAllContacts } from "./pages/Contacts/GetAllContacts";
import { CreateContact } from "./pages/Contacts/CreateContact";
import { GetOneContact } from "./pages/Contacts/GetOneContact";
import { UpdateOneContact } from "./pages/Contacts/UpdateOneContact";
import { CssBaseline, Container } from "@material-ui/core";
import { EMDR } from "./pages/EMDR";

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

          <Route path="/contacts" component={GetAllContacts} />
          <Route path="/create/contacts" component={CreateContact} />
          <Route path="/contact/:id" component={GetOneContact} />
          <Route path="/contact/update/:id" component={UpdateOneContact} />

          <Route path="/emdr" component={EMDR} />
          <Route path="*" component={Error404} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
