import React, { Component, useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  DefaultRoute,
  Link,
  useLocation,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <LocationDisplay />
        </Router>
      </div>
    );
  }
}
export function LocationDisplay() {
  const loc = useLocation();
  return <h6 data-testid="location-display">{loc.pathname}</h6>;
}
export function NoMatch() {
  return <h2>No match</h2>;
}
export function Home() {
  return <h2>You are home</h2>;
}

export function About() {
  return <h2>You are on the about page</h2>;
}

export default App;
