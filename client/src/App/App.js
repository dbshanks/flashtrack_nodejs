import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { GetAllJournals } from "./pages/Journals/GetAllJournals";
import { GetOneJournal } from "./pages/Journals/GetOneJournal";
import { CreateJournal } from "./pages/Journals/CreateJournal";
import { GetAllContacts } from "./pages/Contacts/GetAllContacts";
import { CreateContact } from "./pages/Contacts/CreateContact";
import { GetOneContact } from "./pages/Contacts/GetOneContact";
import { Entry } from "./Website/Sections/Entry";
import { CssBaseline } from "@material-ui/core";
import { EMDR } from "./components/EMDR/EMDR";
import Layout from "./components/Layout/Layout";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <CssBaseline />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Entry} />

            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />

            <Route path="/journals" component={GetAllJournals} />
            <Route path="/create/journals" component={CreateJournal} />
            <Route path="/journal/:id" component={GetOneJournal} />

            <Route path="/contacts" component={GetAllContacts} />
            <Route path="/create/contacts" component={CreateContact} />
            <Route path="/contact/:id" component={GetOneContact} />

            <Route path="/emdr" component={EMDR} />
            <Route path="*" component={Error404} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </Fragment>
  );
};
