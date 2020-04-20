import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Link,
} from "@material-ui/core";
import { useStyles } from "./GetOneContact.styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const GetOneContact = (props) => {
  const classes = useStyles();
  const [contact, setContact] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://flashtrack.herokuapp.com/api/v1/contacts/" +
          props.match.params.id
      )
      .then((res) => {
        setContact(res.data.data.contact);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.match.params.id]);

  function deleteContact() {
    axios.delete(
      "https://flashtrack.herokuapp.com/api/v1/contacts/" +
        props.match.params.id
    );

    setTimeout(() => setRedirect(true), 1000);
  }

  return (
    <AnimationWrapper>
      <Container maxWidth="lg">
        <Grid container className={classes.container}>
          {redirect ? <Redirect to="/contacts" /> : null}

          <Grid item sm={12} key={contact._id}>
            <Typography variant="h3">{contact.fullname}</Typography>

            <Box className={classes.contactEntry} component="div">
              <Typography variant="body1">{contact.phonenumber}</Typography>
              <Typography color="primary" variant="body2">
                {contact.email}
              </Typography>
              <Typography color="primary" variant="body2">
                {contact.note}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => deleteContact()}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AnimationWrapper>
  );
};
