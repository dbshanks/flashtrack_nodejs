import React, { useState } from "react";
import { useStyles } from "./CreateContact.styles";
import { TextField, Button, Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const CreateContact = () => {
  const [addContact, setAddContact] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios
      .post("https://flashtrack.herokuapp.com/api/v1/contacts", addContact)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handle(e) {
    const newAddContact = { ...addContact };
    newAddContact[e.target.id] = e.target.value;
    setAddContact(newAddContact);
  }

  function redirectHandler() {
    setTimeout(() => setRedirect(true), 1000);
  }

  const classes = useStyles();
  return (
    <AnimationWrapper>
      <div className={classes.container}>
        {redirect ? <Redirect to="/contacts" /> : null}

        <Grid container justify="space-around">
          <Grid item xs={3}>
            <form onSubmit={(e) => submit(e)}>
              <div>
                <TextField
                  id="fullname"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  value={addContact.fullname}
                  onChange={(e) => handle(e)}
                  className={classes.titleField}
                />
              </div>
              <div>
                <TextField
                  id="phonenumber"
                  label="Phone"
                  value={addContact.phonenumber}
                  onChange={(e) => handle(e)}
                  fullWidth
                  variant="outlined"
                  className={classes.titleField}
                />
              </div>
              <div>
                <TextField
                  id="email"
                  label="Email"
                  fullWidth
                  value={addContact.email}
                  onChange={(e) => handle(e)}
                  variant="outlined"
                  className={classes.titleField}
                />
              </div>
              <div>
                <TextField
                  id="note"
                  label="Note"
                  fullWidth
                  value={addContact.note}
                  onChange={(e) => handle(e)}
                  variant="outlined"
                  className={classes.titleField}
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                onClick={() => redirectHandler()}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </AnimationWrapper>
  );
};
