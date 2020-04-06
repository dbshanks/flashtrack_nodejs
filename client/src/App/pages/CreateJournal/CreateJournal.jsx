import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#212121",
    color: "#fafafa",
  },
  titleField: {
    marginBottom: "2rem",
  },
});

export const CreateJournal = () => {
  const [addJournal, setAddJournal] = useState([]);
  const [redirect, setRedirect] = useState(false);

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/journals", addJournal)
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
      <form onSubmit={(e) => submit(e)}>
        <div>
          <TextField
            id="title"
            name="title"
            onChange={(e) => handle(e)}
            value={addJournal.title}
            label="Title"
            variant="filled"
            className={classes.titleField}
          />
        </div>
        <div>
          <TextField
            id="body"
            name="body"
            label="Multiline"
            onChange={(e) => handle(e)}
            value={addJournal.body}
            multiline
            rows="4"
            defaultValue="Enter your journal entry"
            variant="filled"
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
    </div>
  );
};
