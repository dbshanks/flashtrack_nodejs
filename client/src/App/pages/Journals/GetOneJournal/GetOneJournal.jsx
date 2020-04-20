import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import { useStyles } from "./GetOneJournal.styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const GetOneJournal = (props) => {
  const classes = useStyles();
  const [journals, setJournals] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://flashtrack.herokuapp.com/api/v1/journals/" +
          props.match.params.id
      )
      .then((res) => {
        setJournals(res.data.data.journal);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.match.params.id]);

  function deleteJournal() {
    axios.delete(
      "https://flashtrack.herokuapp.com/api/v1/journals/" +
        props.match.params.id
    );
    setTimeout(() => setRedirect(true), 1000);
  }

  return (
    <AnimationWrapper>
      <Container maxWidth="lg">
        <Grid container className={classes.container}>
          {redirect ? <Redirect to="/journals" /> : null}

          <Grid item sm={12} key={journals._id}>
            <Typography variant="h3">{journals.title}</Typography>

            <Box className={classes.journalEntry} component="div">
              <Typography variant="body1">{journals.body}</Typography>
              <Typography color="primary" variant="body2">
                {journals.date}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => deleteJournal()}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AnimationWrapper>
  );
};
