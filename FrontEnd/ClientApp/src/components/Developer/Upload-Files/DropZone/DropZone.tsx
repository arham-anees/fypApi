import * as React from "react";

import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Button } from "@material-ui/core";

export interface DropZoneProps {}

export interface DropZoneState {}

const ContainerStyle: CSSProperties = {
  height: "200px",
  width: "300px",
  border: "1px dashed gray",
  margin: "auto",
  textAlign: "center",
};
const ButtonStyle: CSSProperties = {
  padding: "5px",
  verticalAlign: "bottom",
  height: "100%",
};
const TitleStyle: CSSProperties = {};
const ButtonContainerStyle: CSSProperties = {};

const classes = {
  container: "d-flex flex-column justify-content-between pb-4 pt-3 my-3",
};

class DropZone extends React.Component<DropZoneProps, DropZoneState> {
  render() {
    return (
      <div style={ContainerStyle} className={classes.container}>
        <div style={TitleStyle}>
          Drag and Drop
          <br /> your Project Folder
        </div>
        <div style={ButtonContainerStyle}>
          <Button variant="contained" color="primary" style={ButtonStyle}>
            Select Folder
          </Button>
        </div>
      </div>
    );
  }
}

export default DropZone;
