import React from "react";
import Photo from "./photo";
import { connect } from "react-redux";

const PhotoList = props => {
  let content;
  let showcase = props.publicphotos;
  //console.log(showcase);
  let error = props.error;
  //console.log(error.photoId);
  content = (
    <div className="row">
      {props.photos.map(photo => {
        return (
          <Photo
            error={photo.photoId === error.photoId ? error : false}
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

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps)(PhotoList);
