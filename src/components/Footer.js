import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" align="right">
      Copyright 
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "auto",
    backgroundColor: "#282f36",
    height: "2em",
    overflowY: "hidden",
    paddingTop: "8px"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  );
}
