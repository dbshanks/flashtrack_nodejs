import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Link,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { useStyles } from "./GetAllContacts.styles";
import { Add } from "@material-ui/icons";
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
      <Grid container spacing={3} className={classes.containerSpacing}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card className={classes.card}>
            <Link href={`/create/contact`} variant="h5" gutterBottom>
              <CardActionArea>
                <CardContent className={classes.cardAddContent}>
                  <Add className={classes.addIcon} />
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={12} md={3} lg={3} key={contact._id}>
            <Card className={classes.card}>
              <Link href={`/contact/${contact._id}`} variant="h5" gutterBottom>
                <CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <div>
                      <Typography variant="h5" className={classes.title}>
                        {contact.fullname}
                      </Typography>

                      <Typography variant="body2" component="p">
                        {contact.phone}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {contact.email}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {contact.note}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AnimationWrapper>
  );
};
