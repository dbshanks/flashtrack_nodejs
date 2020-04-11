import React, { useState, useEffect } from "react";
import { useStyles } from "./CreateJournal.styles";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";

export const CreateJournal = () => {
  const [addJournal, setAddJournal] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/journals", addJournal)
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
    <div className={classes.container}>
      {redirect ? <Redirect to="/journals" /> : null}

      <Grid container justify="space-around">
        <Grid xs={6}>
          <form onSubmit={(e) => submit(e)}>
            <FormLabel component="legend">Experience</FormLabel>
            <RadioGroup
              aria-label="Experience"
              name="experience"
              value={addJournal.experience}
              onChange={(e) => handle(e)}
            >
              <FormControlLabel
                value="flashback"
                control={<Radio />}
                label="Flashback"
              />
              <FormControlLabel
                value="trigger"
                control={<Radio />}
                label="Trigger"
              />
              <FormControlLabel value="both" control={<Radio />} label="Both" />
            </RadioGroup>

            <div>
              <TextField
                id="title"
                name="title"
                fullWidth
                onChange={(e) => handle(e)}
                value={addJournal.title}
                label="Title"
                variant="outlined"
                className={classes.titleField}
              />
            </div>
            <div>
              <TextField
                id="body"
                name="body"
                label="Journal"
                onChange={(e) => handle(e)}
                value={addJournal.body}
                multiline
                fullWidth
                rows="4"
                defaultValue="Journal entry"
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
  );
};
