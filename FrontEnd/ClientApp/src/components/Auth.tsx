import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import { withRouter, Redirect } from "react-router";

export interface AuthProps {
  match: string;
}

export interface AuthState {}

class Auth extends React.Component<AuthProps, AuthState> {
  render() {
    return (
      <React.Fragment>
        <NavMenu />
        <Switch>
          <Route path="/auth/(|login)" component={Login} />
          <Route path="/auth/signup" component={SignUp} />
          <Redirect to="/auth/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Auth;
