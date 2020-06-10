import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Breadcrumbs,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import { FaGithubAlt, FaRedditAlien } from "react-icons/fa";

const TypographyLite = styled(Typography)({
  color: "#fff",
});

const useStyles = makeStyles((theme) => ({
  contact: {
    paddingTop: "1.5em",
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingBottom: "1.5em",
  },
  icon: {
    marginRight: "8px",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.contact}>
        <Grid item xs={12} sm={12} md={12} square>
          <div style={{ overflow: "auto" }}>
            <TypographyLite variant="h3" component="h1" gutterBottom>
              Find Me
            </TypographyLite>
            <TypographyLite
              variant="body2"
              style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
            >
              I prefer to stay off most social media, though I lurk on{" "}
              <b>Reddit</b> quite frequently. My favourite subreddits include
              the likes of{" "}
              <i style={{ backgroundColor: "#343633", color: "#B2ECFB" }}>
                r/cats
              </i>
              ,{" "}
              <i style={{ backgroundColor: "#343633", color: "#B2ECFB" }}>
                r/AskHistorians
              </i>{" "}
              and the good old{" "}
              <i style={{ backgroundColor: "#343633", color: "#B2ECFB" }}>
                r/ProgrammerHumor
              </i>
              .
            </TypographyLite>
            <Card>
              <CardContent>
                <Typography
                  variant="overline"
                  style={{ color: "#000", marginTop: "1.5em" }}
                >
                  These are my{" "}
                  <b style={{ color: "#FFB7C3", backgroundColor: "#343633" }}>
                    sole accounts
                  </b>
                  . Other than this website. I will not use anything else to
                  contact you.
                </Typography>

                <Grid container align="center" justify="center" direction="row">
                  <Breadcrumbs
                    style={{ marginTop: "1.5em", marginBottom: "1em" }}
                  >
                    <Typography style={{ color: "#000", display: "flex" }}>
                      <EmailIcon
                        style={{
                          marginRight: 4,
                          marginLeft: 4,
                          width: 20,
                          height: 20,
                        }}
                      />
                      <b>raine.me.lu@gmail.com</b>
                    </Typography>

                    <Typography style={{ color: "#000", display: "flex" }}>
                      <FaRedditAlien
                        style={{
                          marginRight: 4,
                          width: 20,
                          height: 20,
                        }}
                      />
                      <b>u/halfapotatopie</b>
                    </Typography>
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
