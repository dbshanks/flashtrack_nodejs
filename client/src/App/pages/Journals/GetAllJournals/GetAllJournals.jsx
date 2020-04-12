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
import { AnimationWrapper } from "../../../components/AnimationWrapper";

export const GetAllJournals = () => {
  const classes = useStyles();
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/journals")
      .then((res) => {
        setJournals(res.data.data.journals);
      })
      .catch((res) => {
        console.log(res.err);
      });
  }, [journals._id]);
  return (
    <AnimationWrapper>
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
                    <div>
                      <Typography variant="h5" className={classes.title}>
                        {journal.title}
                      </Typography>

                      <Typography variant="body2" component="p">
                        {journal.body}
                      </Typography>
                    </div>
                    <Box component="div" className={classes.root}>
                      <Chip
                        label={journal.event}
                        size="small"
                        className={classes.danger}
                      />
                    </Box>
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
