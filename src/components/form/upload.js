import React, { useState } from "react";
import { connect } from "react-redux";
import { upload_image } from "../../store/actions/files";

const UpLoadForm = props => {
  const [fileStore, setFile] = useState(null);
  const fileChangeHandler = e => {
    setFile(e.target.files[0]);
  };
  const uploadImage = e => {
    e.preventDefault();
    const formData = new FormData();
    //props.upload(fileStore);
    formData.append("file", fileStore);
    props.upload(formData);
    setFile(null);
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
      <br />
      <button type="submit" className="btn btn-primary" onClick={uploadImage}>
        Submit
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    upload: imageData => dispatch(upload_image(imageData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpLoadForm);
