import React, { useState } from "react";
import { useStyles } from "./CreateJournal.styles";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const CreateJournal = () => {
  const [addJournal, setAddJournal] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios
      .post("https://flashtrack.herokuapp.com/api/v1/journals", addJournal)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handle(e) {
    const newAddJournal = { ...addJournal };
    newAddJournal[e.target.id] = e.target.value;
    setAddJournal(newAddJournal);
  }

  function redirectHandler() {
    setTimeout(() => setRedirect(true), 1000);
  }

  const classes = useStyles();
  return (
    <AnimationWrapper>
      <div className={classes.container}>
        {redirect ? <Redirect to="/journals" /> : null}

        <Grid container justify="space-around">
          <Grid item xs={6}>
            <form onSubmit={(e) => submit(e)}>
              <div>
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={addJournal.title}
                  onChange={(e) => handle(e)}
                  className={classes.titleField}
                />
              </div>
              <div>
                <TextField
                  id="body"
                  label="Journal"
                  value={addJournal.body}
                  onChange={(e) => handle(e)}
                  multiline
                  fullWidth
                  rows="20"
                  variant="outlined"
                  className={classes.titleField}
                />
              </div>
              <div>
                <TextField
                  id="event"
                  label="Event"
                  value={addJournal.event}
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
