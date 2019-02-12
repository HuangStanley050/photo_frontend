import React, { useEffect } from "react";
import { connect } from "react-redux";
import { load_images } from "../../store/actions/files";

const Main = props => {
  useEffect(() => {
    props.load();
  }, []);

  return (
    <React.Fragment>
      <h1>Main Dash</h1>
      <ul>
        {props.photos.map(photo => {
          console.log(photo);
          return <li key={photo.photoId}>{photo.photoName}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(load_images())
  };
};

const mapStateToProps = state => {
  return {
    photos: state.file.photos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
