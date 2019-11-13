import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Home() {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justify="center"
      direction="column"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <Typography variant="h2" style={{ color: "#fff" }}>
          Hi I'm <b>Raine</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
