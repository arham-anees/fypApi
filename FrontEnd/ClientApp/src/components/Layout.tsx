import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Home from "./VisitorModule/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <NavMenu />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
