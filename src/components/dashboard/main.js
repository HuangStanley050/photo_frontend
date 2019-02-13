import React, { useEffect } from "react";
import { connect } from "react-redux";
import { load_images } from "../../store/actions/files";
import PhotoList from "./photoList";

const Main = props => {
  useEffect(() => {
    props.load();
  }, []);

  if (!props.auth.isAuthenticate) {
    props.history.push("/login");
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Main Dash for {props.username}</h1>
      </div>
      <PhotoList photos={props.photos} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(load_images())
  };
};

const mapStateToProps = state => {
  return {
    photos: state.file.photos,
    username: state.auth.userInfo.name,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
