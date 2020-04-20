import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Link,
  Card,
  CardContent,
  CardActionArea,
  Container,
} from "@material-ui/core";
import { useStyles } from "./GetAllContacts.styles";
import { Add, Email, Phone, Note } from "@material-ui/icons";
import axios from "axios";
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const GetAllContacts = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://flashtrack.herokuapp.com/api/v1/contacts")
      .then((res) => {
        setContacts(res.data.data.contacts);
      })
      .catch((res) => {
        console.log(res.err);
      });
  }, [contacts._id]);
  return (
    <AnimationWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.containerSpacing}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Card className={classes.card}>
              <Link href={`/create/contacts`} variant="h5" gutterBottom>
                <CardActionArea>
                  <CardContent className={classes.cardAddContent}>
                    <Add className={classes.addIcon} />
                    <Typography variant="body2">Add New Contact</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          {contacts.map((contact) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={contact._id}>
              <Card className={classes.card}>
                <Link
                  href={`/contact/${contact._id}`}
                  variant="h5"
                  gutterBottom
                >
                  <CardActionArea>
                    <CardContent className={classes.cardContent}>
                      <Box>
                        <Typography variant="h4" className={classes.title}>
                          {contact.fullname}
                        </Typography>
                        <Box mt={5}>
                          <Typography variant="body2" component="p">
                            <Phone className={classes.iconStage} />
                            {contact.phonenumber}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <Email className={classes.iconStage} />
                            {contact.email}
                          </Typography>
                          <Typography variant="body2" component="p">
                            <Note className={classes.iconStage} />
                            {contact.note}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AnimationWrapper>
  );
};
