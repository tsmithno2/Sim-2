import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewListing from "./components/NewListing";
import NewListingImage from "./components/NewListingImage";
import NewListingMortgage from "./components/NewListingMortgage";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/newlisting" component={NewListing} />
    <Route path="/image" component={NewListingImage} />
    <Route path="/mortgage" component={NewListingMortgage} />
  </Switch>
);
