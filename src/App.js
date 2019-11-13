import React from "react";
import Home from "./components/Home";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Particles from "react-particles-js";

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
    <div style={{ backgroundColor: "#000" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}


export default App;
