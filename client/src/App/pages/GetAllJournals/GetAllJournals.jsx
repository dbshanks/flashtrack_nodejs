import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Link,
  Chip,
  Card,
  CardActions,
  CardContent,
  Button,
  CardActionArea,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  card: {
    minHeight: "20rem",
  },
  cardContent: {
    minHeight: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  pos: {
    marginBottom: 12,
  },
  containerSpacing: {
    marginTop: "6rem",
  },
  danger: {
    background: "#d32f2f",
    color: "#fafafa",
  },
  warning: {
    background: "#FFA000",
    color: "#fff",
  },
  caution: {
    background: "#1976D2",
    color: "#fff",
  },
});

export const GetAllJournals = () => {
  const classes = useStyles();
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/journals/")
      .then((res) => {
        setJournals(res.data.data.journals);
      })
      .catch((res) => {
        console.log(res.err);
      });
  }, [journals._id]);
  return (
    <Grid container spacing={3} className={classes.containerSpacing}>
      {journals.map((journal) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={journal._id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent className={classes.cardContent}>
                <Link
                  href={`/journal/${journal._id}`}
                  variant="h5"
                  gutterBottom
                >
                  {journal.title}
                </Link>
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
                  <Chip label="Both" size="small" className={classes.caution} />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
