import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const TypographyLite = styled(Typography)({
  color: "#fff",
});

function Credits() {
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
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          square
          style={{
            paddingTop: "3em",
            paddingLeft: "2em",
            paddingRight: "2em",
            paddingBottom: "3em",
          }}
        >
          <TypographyLite variant="overline" gutterBottom>
            Designed by <b>me</b> using React and Material UI.
          </TypographyLite>
          <br/>
          <TypographyLite variant="caption" gutterBottom>This website is just a start. I hope to better it as I get better at what I do.</TypographyLite>
        </Grid>
      </Grid>
    </div>
  );
}

export default Credits;
