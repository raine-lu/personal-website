import React from "react";
import { Box, createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Particles from "react-particles-js";
import RouterConfig from "./components/RouterConfig";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "#fff"
      }
    }
  }
});

function App() {
  return (
    <Box
      style={{
        backgroundColor: "#282a36",
        padding: "0px", // remove white space on right hand side
        margin: "0px", // remove white space on right hand side
        overflowX: "hidden" // remove white space on right hand side
      }}
    >
      <Particles
        params={particleParams}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          rigt: 0
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterConfig />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

const particleParams = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

export default App;
