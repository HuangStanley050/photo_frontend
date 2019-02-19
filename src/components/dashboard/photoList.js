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
          />
        );
      })}
    </div>
  );

  return content;
};

// const mapStateToProps = state => {
//   return {
//     loadingStatus: state.file.loading
//   };
// };

export default PhotoList;
