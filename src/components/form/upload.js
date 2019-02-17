import React, { useState } from "react";

const UpLoadForm = props => {
  const [fileStore, setFile] = useState(null);
  const fileChangeHandler = e => {
    console.log("e.target: ", e.target.files[0]);
    setFile(e.target.files[0]);
    console.log("state: " + fileStore);
  };
  return (
    <div className="form-group">
      <label htmlFor="exampleInputFile">Upload your image</label>
      <input
        type="file"
        onChange={fileChangeHandler}
        className="form-control-file"
        id="imageFile"
        aria-describedby="fileHelp"
      />
      <small id="fileHelp" className="form-text text-muted">
        This is some placeholder block-level help text for the above input. It's
        a bit lighter and easily wraps to a new line.
      </small>
    </div>
  );
};

export default UpLoadForm;
