import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Splash } from "./pages/Splash";
import { Navigation } from "./components/Navigation";
import { Error404 } from "./pages/Error404";
import { Dashboard } from "./pages/Dashboard";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { GetAllJournals } from "./pages/Journals/GetAllJournals";
import { GetOneJournal } from "./pages/Journals/GetOneJournal";
import { UpdateOneJournal } from "./pages/Journals/UpdateOneJournal";
import { CreateJournal } from "./pages/Journals/CreateJournal";
import { GetAllContacts } from "./pages/Contacts/GetAllContacts";
import { CreateContact } from "./pages/Contacts/CreateContact";
import { GetOneContact } from "./pages/Contacts/GetOneContact";
import { UpdateOneContact } from "./pages/Contacts/UpdateOneContact";
import { Entry } from "./Website/Entry";
import { CssBaseline, Container } from "@material-ui/core";
import { EMDR } from "./components/EMDR/EMDR";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <CssBaseline />
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Entry} />
          <Route path="/app" component={Splash} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

          <Route path="/journals" component={GetAllJournals} />
          <Route path="/create/journals" component={CreateJournal} />
          <Route path="/journal/:id" component={GetOneJournal} />
          <Route path="/journal/update/:id" component={UpdateOneJournal} />

          <Route path="/contacts" component={GetAllContacts} />
          <Route path="/create/contact" component={CreateContact} />
          <Route path="/contact/:id" component={GetOneContact} />
          <Route path="/contact/update/:id" component={UpdateOneContact} />

          <Route path="/emdr" component={EMDR} />
          <Route path="*" component={Error404} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
