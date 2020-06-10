import React from "react";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Credits from "./Credits";

const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/credits" component={Credits} />
      </Switch>
    </div>
  );
};

export default RouterConfig;
