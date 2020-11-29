import React, { Component, useState, useLocation } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home.js";
import About from "../components/About.js";
import Nav from "../components/Nav";
import NoMatch from "../components/NoMatch";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div id="main">
            <Nav />
            <LocationDisplay />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="*" exact component={NoMatch} />
          </div>
        </Switch>
      </Router>
    );
  }
}

// export function LocationDisplay() {
//   const { pathname } = useLocation();
//   console.log(pathname);
//   return <div data-testid="location-display">{pathname}</div>;
// }

export default App;
