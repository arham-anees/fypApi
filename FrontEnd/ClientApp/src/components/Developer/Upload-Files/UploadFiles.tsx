import * as React from "react";
import DropZone from "./DropZone/DropZone";
import UploadFile from "./UploadFile/UploadFile";

class UploadFiles extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <DropZone />

          <div>
            <UploadFile />
            <UploadFile />
            <UploadFile />
            <UploadFile />
            <UploadFile />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UploadFiles;
