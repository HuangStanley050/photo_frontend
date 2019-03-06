import React from "react";
import ShowCase from "./showcase";
import { connect } from "react-redux";

const ShowCaseList = props => {
  return (
    <div className="row">
      {props.publicphotos.map(photo => {
        return (
          <ShowCase
            key={photo.photoId}
            id={photo.photoId}
            name={photo.photoName}
            error={props.error.photoId === photo.photoId ? props.error : null}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps)(ShowCaseList);
