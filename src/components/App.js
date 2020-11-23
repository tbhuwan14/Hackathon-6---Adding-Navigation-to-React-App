import React, {Component, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../components/Home.js";
import About from "../components/About.js";
import Nav from "../components/Nav"
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <Router>
                <Switch>
                    <div id="main">
                        <Nav/>
                        <Route 
                            path="/"
                            exact
                            component={Home}    
                        />
                        <Route 
                            path="/about"
                            component={About}    
                        />
                    </div>
                </Switch>
            </Router>
        )
    }
}


export default App;
