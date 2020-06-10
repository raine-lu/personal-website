import React, { Component } from "react";
import {
  Box,
  createMuiTheme,
  CssBaseline,
  AppBar,
  BottomNavigation,
  Breadcrumbs,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
// Webpage components
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Credits from "./components/Credits";
import Rose from "./rose.jpg";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "#fff",
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    MuiChip: {
      sizeSmall: {
        margin: 2,
        backgroundColor: "#BCF4DE",
      },
    },
    MuiButtonBase: {
      root: {
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "scale(1.15)",
        },
      },
    },
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <Box
        style={{
          backgroundImage:
            "linear-gradient( rgba(0,0,0,.3), rgba(0,0,0,.3) ), url(" + Rose + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "0px", // remove white space on right hand side
          margin: "0px", // remove white space on right hand side
          // overflowX: "hidden", // remove white space on right hand sid
          height: "100%",
          minHeight: "100%",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/*  {pageItems} */}
          <AppBar
            position="fixed"
            style={{
              backgroundColor: "#343633",
              boxShadow: "none",
              opacity: 0.8,
              maxHeight: "3em"
            }}
          >
            <BottomNavigation
              showLabels
              style={{
                marginTop: "0.5em",
              }}
            >
              <Breadcrumbs style={{color:"#fff"}}>
                <ButtonBase component={Link} to="home">
                  <Typography variant="button">Home</Typography>
                </ButtonBase>

                <ButtonBase component={Link} to="about">
                  <Typography variant="button">About</Typography>
                </ButtonBase>

                <ButtonBase component={Link} to="contact">
                  <Typography variant="button">Contact</Typography>
                </ButtonBase>
              </Breadcrumbs>
              {/*  <BottomNavigationAction
                label="Home"
                component={Link}
                to="home"
                icon={<HomeIcon />}
              />

              <BottomNavigationAction
                label="About"
                component={Link}
                to="about"
                icon={<AboutIcon />}
              />

              <BottomNavigationAction
                label="Contact"
                component={Link}
                to="contact"
                icon={<ContactIcon />}
              /> */}
            </BottomNavigation>
          </AppBar>

          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element>
            <Resume />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Element>
            <Credits />
          </Element>
        </ThemeProvider>
      </Box>
    );
  }
}

export default App;
