import React from "react";
import {
  Grid,
  Typography,
  GridList,
  GridListTile,
  ButtonBase,
  Box
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import ResumeIcon from "@material-ui/icons/Description";
import ContactIcon from "@material-ui/icons/ContactMail";

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
      <Box style={{ backgroundColor: "#000" }}>
        <Typography variant="h2">
          Hi I'm <b>Raine</b>
        </Typography>

        <Typography
          variant="subtitle2"
          display="block"
          style={{ marginTop: "1em" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Quos blanditiis tenetur unde suscipit, <br />
          quam beatae rerum inventore consectetur,
          <br /> neque doloribus, cupiditate numquam dignissimos laborum
          <br />
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <GridList
        cellHeight={"10em"}
        col={3}
        spacing={2}
        style={{
          width: "27em",
          marginTop: "8em"
        }}
      >
        <GridListTile style={{ width: "33.3%" }}>
          <ButtonBase>
            <FaceIcon style={{ color: "#fff", marginRight: "8px" }} />
            <Typography variant="button">About</Typography>
          </ButtonBase>
        </GridListTile>
        <GridListTile style={{ width: "33.3%" }}>
          <ButtonBase>
            <ResumeIcon style={{ color: "#fff", marginRight: "8px" }} />
            <Typography variant="button">Resume</Typography>
          </ButtonBase>
        </GridListTile>
        <GridListTile style={{ width: "33.3%" }}>
          <ButtonBase>
            <ContactIcon style={{ color: "#fff", marginRight: "8px" }} />
            <Typography variant="button">Contact</Typography>
          </ButtonBase>
        </GridListTile>
      </GridList>
    </Grid>
  );
}

export default Home;
