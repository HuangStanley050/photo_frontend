import React from "react";
import Photo from "./photo";

const PhotoList = props => {
  let content;
  let showcase = props.publicphotos;
  //console.log(showcase);
  content = (
    <div className="row">
      {props.photos.map(photo => {
        return (
          <Photo
            key={photo.photoId}
            name={photo.photoName}
            id={photo.photoId}
            isPublic={
              showcase.find(showphoto => showphoto.photoId === photo.photoId)
                ? true
                : false
            }
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
