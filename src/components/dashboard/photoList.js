import React from "react";
import Photo from "./photo";

const PhotoList = props => {
  const NoPhotos = <h2>You have not uploded any photos</h2>;
  const havePhotos = (
    <div className="row">
      {props.photos.map(photo => {
        return <Photo key={photo.photoId} name={photo.photoName} />;
      })}
    </div>
  );
  if (props.photos.length !== 0) {
    return havePhotos;
  } else {
    return NoPhotos;
  }
};

export default PhotoList;
