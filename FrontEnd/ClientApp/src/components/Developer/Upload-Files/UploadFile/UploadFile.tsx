import * as React from "react";
import { Box } from "@material-ui/core";

const classes = {
  Box: "my-3 px-3",
};

class UploadFile extends React.Component {
  render() {
    return (
      <Box boxShadow={3} className={classes.Box}>
        <h6>file name with full path</h6>
        <span></span>
      </Box>
    );
  }
}

export default UploadFile;
