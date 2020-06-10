import React from "react";
import { Grid, Typography, Paper, ButtonBase } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Details from "./sub/Details";

const TypographyLite = styled(Typography)({
  color: "#000",
});

export default function About() {
  return (
    <div>
      <Grid
        container
        alignItems="left"
        justify="center"
        direction="row"
        style={{
          overflow: "hidden",
        }}
      >
        {/* Grid for main about section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          square
          component={Paper}
          style={{
            paddingTop: "3em",
            paddingLeft: "2em",
            paddingRight: "2em",
            paddingBottom: "3em",
            overflowY: "auto",
          }}
        >
          <div style={{ minHeight: "80vh", height: "80vh" }}>
            <TypographyLite variant="h3" component="h1" gutterBottom>
              About Me
            </TypographyLite>

            <TypographyLite
              variant="body2"
              display="block"
              style={{ marginTop: "2em" }}
            >
              I graduated with a{" "}
              <a style={{ backgroundColor: "#343633", color: "#B2ECFB" }}>
                Bachelor of Computing in Information Systems
              </a>{" "}
              from the National University of Singapore in 2020.
            </TypographyLite>

            <TypographyLite
              display="block"
              style={{ marginTop: "2em", marginBottom: "2em" }}
            >
              ...<br/>
              (Apologies! About Me section is still a work in progress. I promise it will be up, proper, soon.)
            </TypographyLite>
          </div>
        </Grid>

        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "3em",
            paddingLeft: "3em",
            paddingRight: "3em",
            paddingBottom: "3em",
            backgroundColor: "#343633",
            width: "100vw",
          }}
        >
          {/* typography details */}
          <Details />
        </Grid>
      </Grid>
    </div>
  );
}
