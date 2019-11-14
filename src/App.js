import React from "react";
import { Box, createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import RouterConfig from "./components/RouterConfig";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "#fff"
      }
    },
  }
});

function App() {
  return (
    <Box
      style={{
        backgroundColor: "#282a36",
        padding: "0px", // remove white space on right hand side
        margin: "0px", // remove white space on right hand side
        overflowX: "hidden",// remove white space on right hand side
        height: "100%",
        minHeight: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterConfig />
      </ThemeProvider>
    </Box>
  );
}



export default App;
