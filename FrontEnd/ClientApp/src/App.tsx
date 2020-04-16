import * as React from "react";

import "./custom.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Page404 from "./components/Page404";
import Home from "./components/VisitorModule/Home/Home";
import AboutUs from "./components/VisitorModule/AboutUs/AboutUs";
import NavMenu from "./components/NavMenu";
import Auth from "./components/Auth";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/(|home)">
        <NavMenu />
        <Home />
      </Route>
      <Route path="/aboutus">
        <NavMenu />
        <AboutUs />
      </Route>
      <Route path="/Auth" component={Auth} />
      <Route path="/404">
        <NavMenu />
        <Page404 />
      </Route>
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);
