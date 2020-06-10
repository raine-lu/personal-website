import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Particles from "react-particles-js";
import { Link } from "react-scroll";


function Home() {
  return (
    <div>
      <Particles
        params={particleParams}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      />
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{
          height: "99vh",
          paddingTop: "3em",
          paddingBottom: "3em",
          overflow: "hidden",
          /*           backgroundImage:
            "linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(" +
            Rose +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", */
        }}
      >
        <Grid
          item
          style={{
            paddingLeft: "3em",
            paddingRight: "2em",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            display="block"
            style={{ marginTop: "2em" }}
          >
            Hi I'm <b style={{ color: "#FFB7C3" }}> Raine</b>
          </Typography>
          <Typography
            variant="overline"
            component="body1"
            align="center"
            display="block"
            style={{
              marginBottom: "1em",
            }}
          >
            Computing Graduate. National University of Singapore.
          </Typography>

          <Grid item style={{ maxWidth: "35em" }}>
            {/*             <Typography
              variant="body2"
              align="center"
              display="block"
              style={{
                marginTop: "3em",
                marginBottom: "1em",
              }}
            >
             I appreciate and like creating beautiful things.
            </Typography> */}

            <Typography
              variant="subtitle2"
              display="block"
              align="center"
              style={{ marginTop: "2em", marginBottom: "1em" }}
            >
              <b>
                <i>"The willingness to learn is a choice." - Brian Herbert</i>
              </b>
            </Typography>
            <Typography
              variant="body1"
              display="block"
              align="center"
              style={{ marginBottom: "1em" }}
            >
              I like writing and I like creating things. Show me a beautiful
              interface and I will want to learn how to make it. I can read
              almost <i>anything</i> that captures my interest.
            </Typography>
          </Grid>

          <Button
            size="large"
            component={Link}
            to="about"
            style={{
              borderRadius: 0,
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                textShadow: "0 0 3px #EEC6CA",
                marginTop: "1em",
              }}
            >
              More about me?
            </Typography>
          </Button>

          <Button
            size="large"
            style={{
              borderRadius: 0,
              textTransform: "none",
              width: "100%",
            }}
          >
            {/*             <Typography variant="subtitle2" style={{ color: "#DED6D1" }}>
              Why Plum Blossoms?
            </Typography> */}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const particleParams = {
  particles: {
    number: {
      value: 337,
      density: {
        enable: false,
        value_area: 2000,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.33,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 8.8,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default Home;
