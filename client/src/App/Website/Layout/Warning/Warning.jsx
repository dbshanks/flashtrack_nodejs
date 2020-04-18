import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import { WarningOutlined } from "@material-ui/icons";
import useStyles from "./Warning.styles";

const Warning = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.warning}>
      <WarningOutlined className={classes.icon} />
      <Typography variant="h2">IMPORTANT NOTICE</Typography>
      <Typography variant="body1" className={classes.warningPost}>
        This application is not a clinically proven method to provide solutions
        for PTSD related symptoms. It is a prototype application completed as a
        final project for a Frontend Web Development education course. For more
        information, please contact:
        <Link href="mailto://dbshanks75@hotmail.com" className={classes.link}>
          Derek Shanks
        </Link>
      </Typography>
      <Link to="/entry">
        <Button variant="contained" className={classes.button}>
          I understand! Proceed to WebSite
        </Button>
      </Link>
    </Container>
  );
};

export default Warning;
