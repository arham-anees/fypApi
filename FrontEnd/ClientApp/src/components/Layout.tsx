import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Home from "./Home/Home";

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <NavMenu />
    <Home />
  </React.Fragment>
);
