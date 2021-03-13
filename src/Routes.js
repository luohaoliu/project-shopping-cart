import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./Shop"
import About from "./About";
import Nav from "./Nav";

const Routes = () => {
    return (
        <Router>
        
        <Nav />


        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/shop" component={Shop} />
        </Switch>
        </Router>
    )
}

export default Routes;