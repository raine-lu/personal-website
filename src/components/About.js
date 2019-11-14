import React from "react";
import {
  Grid,
  Typography,
  Paper,
  ButtonGroup,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ResumeIcon from "@material-ui/icons/Description";
import ContactIcon from "@material-ui/icons/ContactMail";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const TypographyLite = styled(Typography)({
  color: "#000"
});

function About() {
  return (
    <Grid
      container
      alignItems="left"
      justify="center"
      direction="row"
      style={{
        minHeight: "100vh",
        overflow: "auto"
      }}
    >
      {/* Grid for main about section */}
      <Grid
        item
        xs={12}
        sm={8}
        component={Paper}
        square
        style={{ paddingTop: "3em", paddingLeft: "2em", paddingRight: "2em" }}
      >
        <div style={{ minHeight: "80vh", height: "80vh", overflow: "auto" }}>
          <TypographyLite variant="h3" component="h1" gutterBottom>
            About
          </TypographyLite>
          <TypographyLite variant="subtitle2" gutterBottom>
            <i>"personal quote here i am a big potato"</i> ~ potatopie
          </TypographyLite>
          <TypographyLite
            variant="body2"
            display="block"
            style={{ marginTop: "2em" }}
          >
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </TypographyLite>

          <TypographyLite
            variant="body2"
            display="block"
            style={{ marginTop: "2em" }}
          >
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?"
          </TypographyLite>
        </div>

        <div>
          <ButtonGroup color="secondary" variant="text">
            <Button component={Link} to={"/"}>
              <HomeIcon style={{ marginRight: "8px" }} /> Homepage
            </Button>
            <Button component={Link} to={"/resume"}>
              <ResumeIcon style={{ marginRight: "8px" }} /> Get Resume
            </Button>
            <Button component={Link} to={"/contact"}>
              <ContactIcon style={{ marginRight: "8px" }} /> Contact Me
            </Button>
          </ButtonGroup>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "3em",
          paddingLeft: "2em",
          paddingRight: "2em"
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Details
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
