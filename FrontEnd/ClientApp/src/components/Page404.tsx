import * as React from "react";

export interface Page404Props {}

export interface Page404State {}

class Page404 extends React.Component<Page404Props, Page404State> {
  render() {
    return <h1>Page not found</h1>;
  }
}

export default Page404;
