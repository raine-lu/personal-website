import React from "react";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";
import {Switch, Route} from 'react-router-dom'

function RouterConfig() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  );
}

export default RouterConfig;
