import React from "react";
import {
  Typography,
  Grid,
  Divider,
  Box,
  Chip,
  Button,
  Avatar,
  ListItem,
  List,
  Dialog,
  DialogContent,
  DialogContentText,
  ButtonBase
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { styled } from "@material-ui/core/styles";
import DesignIcon from "@material-ui/icons/Palette";
import FrontendIcon from "@material-ui/icons/DeveloperBoard";
import ManagementIcon from "@material-ui/icons/SupervisorAccount";

const TypographyLite = styled(Typography)({
  color: "#fff",
});

const StyledBase = styled(ButtonBase)({
  height: "11rem",
  width: "100%",
  background: "#C5F2FC",
  borderBottom: "3px solid #FFADBB",
  padding:"1em"
});

function Details() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <TypographyLite variant="h5" component="h2" gutterBottom>
          What I Can Do
        </TypographyLite>
      </Grid>

{/*       <TypographyLite
        variant="body2"
        display="block"
        style={{ marginTop: "2em" }}
      >
        These are my key areas of interest which I want to further pursue.
        (Click the buttons for more information?)
      </TypographyLite> */}

      <Grid container spacing={2} style={{ marginTop: "1.5em" }}>
        <Grid item xs={4} sm={4} md={4}>
          <StyledBase>
            <List>
              <ListItem>
                <Avatar style={{ width: "3em", height: "3em", margin: "auto"}}>
                  <DesignIcon style={{ width: "3em", height: "3em" }} />
                </Avatar>
              </ListItem>

              <ListItem>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: 400, color: "#777" }}
                >
                  UI Design
                </Typography>
              </ListItem>
            </List>
          </StyledBase>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <StyledBase>
            <List>
              <ListItem>
                <Avatar style={{ width: "3em", height: "3em", margin: "auto" }}>
                  <FrontendIcon style={{ width: "2.5em", height: "2.5em" }} />
                </Avatar>
              </ListItem>

              <ListItem>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: 400, color: "#777" }}
                  align="center"
                >
                  Front End Development{" "}
                </Typography>
              </ListItem>
            </List>
          </StyledBase>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <StyledBase>
            <List>
              <ListItem alignItems="center">
                <Avatar style={{ width: "3em", height: "3em", margin: "auto" }}>
                  <ManagementIcon style={{ width: "3em", height: "3em" }} />
                </Avatar>
              </ListItem>
              <ListItem alignItems="center">
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{ fontWeight: 400, color: "#777" }}
                >
                  Info Systems Management{" "}
                </Typography>
              </ListItem>
            </List>
          </StyledBase>
        </Grid>
      </Grid>

      {/*        <Box style={{ marginBottom: "1em", marginTop: "1.5em" }}>
          <Typography variant="subtitle1" gutterBottom display="block">
            <b style={{ color: "#FFB7C3" }}>Languages Known</b>
          </Typography>
        </Box>

        <Box>
          <Chip label="English" size="small" />
          <Chip label="Chinese" size="small" />
                   <Chip label="Shanghainese" size="small" />
           
        </Box>

        <Box style={{ marginBottom: "1em", marginTop: "1.5em" }}>
          <Typography variant="subtitle" gutterBottom display="block">
            <b style={{ color: "#FFB7C3" }}>Programming Experience</b>
          </Typography>
        </Box>
        <Box>
          <Chip label="ReactJS" size="small" />
          <Chip label="CSS" size="small" />
          <Chip label="HTML" size="small" />
          <Chip label="Javascript" size="small" />
          <Chip label="NodeJS" size="small" />
          <Chip label="Docker" size="small" />
        </Box> */}
    </Grid>
  );
}

export default Details;
