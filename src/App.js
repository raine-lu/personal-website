import React from "react";
import Home from "./components/Home";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Rainy from "./rainy.jpg";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        width: "50%",
        left: "50%",
        top: "50%",
        overflow: "auto"
      }
    }
  }
});

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0px",
        border: "0px",
        margin: "0px",
        minWidth: "100vw",
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + Rainy + ")", //syntax for background image
        opacity: 0.75
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
