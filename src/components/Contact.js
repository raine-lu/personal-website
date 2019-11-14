import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Link,
  Card,
  CardActions,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rainy from "../raining.jpg";
import { styled } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";
import { FaGithubAlt } from "react-icons/fa";
import HomeIcon from "@material-ui/icons/Home";
import ResumeIcon from "@material-ui/icons/Description";
import ContactIcon from "@material-ui/icons/ContactMail";
import FaceIcon from "@material-ui/icons/Face";

const TypographyLite = styled(Typography)({
  color: "#000"
});

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(" + Rainy + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.75
  },
  contact: {
    paddingTop: "3em",
    paddingLeft: "2em",
    paddingRight: "2em"
  },
  card: {
    marginTop: "3.5em",
    backgroundColor: "#282a36",
    opacity: 0.55
  },
  icon: {
    marginRight: "8px"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        component={Paper}
        square
        className={classes.contact}
      >
        <div style={{ minHeight: "77vh", height: "77vh", overflow: "auto" }}>
          <TypographyLite variant="h3" component="h1" gutterBottom>
            Contact Me
          </TypographyLite>
          <Card className={classes.card}>
            <CardContent>
              <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Email"
                      secondary="contact@rainelu.me"
                      secondaryTypographyProps={{ color: "#fff" }}
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ListItem
                    component={Link}
                    href="https://github.com/halfapotatopie"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FaGithubAlt />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Github"
                      secondary="halfapotatopie"
                      secondaryTypographyProps={{ color: "#fff" }}
                    />
                  </ListItem>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        <ButtonGroup color="secondary" variant="text">
          <Button component={Link} to={"/"}>
            <HomeIcon className={classes.icon} /> Home
          </Button>
          <Button component={Link} to={"/resume"}>
            <ResumeIcon className={classes.icon} /> Resume
          </Button>
          <Button component={Link} to={"/contact"}>
            <FaceIcon className={classes.icon} /> About
          </Button>
        </ButtonGroup>

        <div
          style={{
            position: "fixed",
            bottom: 0,
          }}
        >
          <TypographyLite
            variant="caption"
            component={Link}
            href="https://www.pexels.com/photo/taxi-on-the-road-1824270/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
            target="_blank"
            rel="noreferrer"
          >
            Credit: Photo by Victor Miyata from Pexels
          </TypographyLite>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
    </Grid>
  );
}
