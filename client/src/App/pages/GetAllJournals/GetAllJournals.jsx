import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Link,
  Chip,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { useStyles } from "./GetAllJournals.styles";
import { Add } from "@material-ui/icons";
import axios from "axios";

export const GetAllJournals = () => {
  const classes = useStyles();
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/journals/")
      .then((res) => {
        setJournals(res.data.data.journals);
      })
      .catch((res) => {
        console.log(res.err);
      });
  }, [journals._id]);
  return (
    <Grid container spacing={3} className={classes.containerSpacing}>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card className={classes.card}>
          <Link href={`/create/journals`} variant="h5" gutterBottom>
            <CardActionArea>
              <CardContent className={classes.cardAddContent}>
                <Add className={classes.addIcon} />
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
      {journals.map((journal) => (
        <Grid item xs={12} sm={12} md={3} lg={3} key={journal._id}>
          <Card className={classes.card}>
            <Link href={`/journal/${journal._id}`} variant="h5" gutterBottom>
              <CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" className={classes.title}>
                    {journal.title}
                  </Typography>

                  <Typography variant="body1" component="p">
                    {journal.body}
                  </Typography>
                  <Box component="div" className={classes.root}>
                    <Chip
                      label="Trigger"
                      size="small"
                      className={classes.danger}
                    />
                    <Chip
                      label="Flashback"
                      size="small"
                      className={classes.warning}
                    />
                    <Chip
                      label="Both"
                      size="small"
                      className={classes.caution}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
