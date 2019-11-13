import React from "react";
import Home from "./components/Home";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Rainy from "./rainy.jpg";

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
    <div
      style={{
        backgroundColor: "#000",
        margin: 0,
        minHeight: "100vh",
        padding: "0px",
        border: "0px",
        margin: "0px",
        minWidth: "100vw" 
      }}
    >
      <div
        style={{
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
     </div> 
  );
}

export default App;
