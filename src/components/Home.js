import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Home() {
  return (
    <Grid container spacing={1} alignItems="center" justify="center" direction="column" style={{minHeight:'100vh'}}>
        <Typography variant="h2" style={{color: "#fff"}}>
            Hi I'm Raine
        </Typography>
    </Grid>
  );
}

export default Home;
