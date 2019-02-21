import React from "react";
import api_routes from "../../api_routes/routes";
import { connect } from "react-redux";
import { make_public, unmakePublic } from "../../store/actions/files";
/*global localStorage */

const Photo = props => {
  const privateStyle = {
    borderWidth: "thick",
    borderColor: "red"
  };

  const publicStyle = {
    borderWidth: "thick",
    borderColor: "blue"
  };

  console.log(props.error);
  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img
          style={props.isPublic ? publicStyle : privateStyle}
          className="img-thumbnail"
          src={
            api_routes.loadImage +
            props.name +
            "?token=" +
            localStorage.jwtToken
          }
        />
      </div>
      <button
        onClick={() => props.publicPhoto(props.id, props.name)}
        style={{ marginRight: "0.1rem" }}
        type="button"
        className="btn btn-primary"
      >
        Make Public
      </button>
      <button
        onClick={() => props.unpublicPhoto(props.id)}
        type="button"
        className="btn btn-danger"
      >
        Hide
      </button>
      <h5 style={{ color: "red" }}>{props.error ? props.error.error : null}</h5>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    publicPhoto: (photoId, photoName) =>
      dispatch(make_public(photoId, photoName)),
    unpublicPhoto: photoId => dispatch(unmakePublic(photoId))
  };
};

// const mapStateToProps = state => {
//   return {
//     error: state.error.error
//   };
// };

export default connect(
  null,
  mapDispatchToProps
)(Photo);
