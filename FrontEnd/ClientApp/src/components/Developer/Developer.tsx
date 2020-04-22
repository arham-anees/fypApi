import * as React from "react";
import DeveloperDashboard from "./Developer-Dashboard/DeveloperDashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UploadFiles2 from "./Upload-Files/UploadFiles";

export interface DeveloperProps {}

export interface DeveloperState {}

class Developer extends React.Component<DeveloperProps, DeveloperState> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/developer/(|Dashboard)"
            component={DeveloperDashboard}
          />
          <Route path="/developer/Upload">
            <UploadFiles2 />
          </Route>
          <Redirect to="/developer/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Developer;
