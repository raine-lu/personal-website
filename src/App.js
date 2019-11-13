import React from "react";
import Home from "./components/Home";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Particles from "react-particles-js";
import RouterConfig from "./components/RouterConfig";

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
    <div style={{ backgroundColor: "#282a36" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterConfig/>
      </ThemeProvider>
    </div>
  );
}


export default App;
