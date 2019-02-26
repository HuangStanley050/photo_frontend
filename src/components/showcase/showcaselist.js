import React from "react";
import ShowCase from "./showcase";

const ShowCaseList = props => {
  return (
    <div className="row">
      {props.publicphotos.map(photo => {
        return (
          <ShowCase
            key={photo.photoId}
            id={photo.photoId}
            name={photo.photoName}
          />
        );
      })}
    </div>
  );
};

export default ShowCaseList;
