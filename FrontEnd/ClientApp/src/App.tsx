import * as React from "react";

import "./custom.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Page404 from "./Views/Page404/Page404";
import Home from "./components/VisitorModule/Home/Home";
import AboutUs from "./components/VisitorModule/AboutUs/AboutUs";
import NavMenu from "./Views/NavBar/NavMenu";
import Auth from "./components/Auth/Auth";
import Developer from "./components/Developer/Developer";
export default () => (
  <BrowserRouter>
    <NavMenu IsLoggedIn={true} />
    <Switch>
      <Route exact path="/(|home)">
        <Home />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/404" component={Page404} />

      <Route path="/Auth" component={Auth} />
      <Route path="/Developer" component={Developer} />

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);
