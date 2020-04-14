import * as React from "react";

import "./custom.css";
import Login from "./components/UserModule/Login/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Page404 from "./components/Page404";
import Home from "./components/VisitorModule/Home/Home";
import AboutUs from "./components/VisitorModule/AboutUs/AboutUs";
import NavMenu from "./components/NavMenu";
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
      <Route path="/login">
        <NavMenu />
        <Login />
      </Route>
      <Route path="/404">
        <NavMenu />
        <Page404 />
      </Route>
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);
