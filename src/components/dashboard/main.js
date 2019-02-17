import React, { useEffect } from "react";
import { connect } from "react-redux";
import { load_images } from "../../store/actions/files";
import PhotoList from "./photoList";
import Spinner from "../spinner/spinner";
import UpLoadForm from "../form/upload";

const Main = props => {
  useEffect(() => {
    props.load();
  }, []);

  if (!props.auth.isAuthenticate) {
    props.history.push("/login");
  }
  let noPhotos = <h1>You have not yet uploaded photos</h1>;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Main Dash for {props.username}</h1>
      </div>
      <UpLoadForm />
      {props.photos.length === 0 ? noPhotos : null}
      {props.loading ? <Spinner /> : <PhotoList photos={props.photos} />}
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
    loading: state.file.loading,
    username: state.auth.userInfo.name,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
