import React from "react";
import Photo from "./photo";

const PhotoList = props => {
  let content;

  content = (
    <div className="row">
      {props.photos.map(photo => {
        return (
          <Photo
            key={photo.photoId}
            name={photo.photoName}
            id={photo.photoId}
            isPublic={false}
          />
        );
      })}
    </div>
  );

  return content;
};

// const mapDispatchToProps = dispatch => {
//   return {
//     loadPublic: () => dispatch(checkPublicPhotos())
//   };
// };

export default PhotoList;
