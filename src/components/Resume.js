import React from "react";
import { Grid, Typography, ButtonBase } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const TypographyLite = styled(Typography)({
  color: "#343633",
});

function Resume() {
  return (
    <div>
      <Grid
        container
        align="center"
        justify="center"
        direction="row"
        style={{
          overflow: "hidden",
          background:"#FFB7C3"
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
            paddingBottom: "3em"
          }}
        >
          <ButtonBase
            href="https://google.com"
            fullWidth
          >
            <TypographyLite
              variant="h5"
            >
              You can get my <b>resume</b> here.
            </TypographyLite>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
