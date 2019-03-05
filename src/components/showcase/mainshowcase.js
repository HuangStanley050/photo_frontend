import React, { useEffect } from "react";
import ShowCaseList from "./showcaselist";
import { connect } from "react-redux";
import { load_PublicPhotos } from "../../store/actions/files";
import Spinner from "../spinner/spinner";
import BackDrop from "../modal/backdrop";

const MainShowCase = props => {
  useEffect(() => {
    props.load();
  }, []);

  let viewPortCenter = {
    position: "relative",
    top: "90%",
    left: "0",
    transform: "translateY(+30vh)",
    zIndex: "6"
  };

  let content;

  if (props.loading) {
    content = (
      <div style={viewPortCenter}>
        <Spinner />
      </div>
    );
  } else {
    content = (
      <ShowCaseList
        publicphotos={props.publicphotos}
        reviewedPhotos={props.ratedPhotos}
      />
    );
  }
  return (
    <div style={{ marginTop: "2.5rem" }} className="container">
      {props.loading ? <BackDrop /> : null}
      {content}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(load_PublicPhotos())
  };
};

const mapStateToProps = state => {
  return {
    loading: state.file.loading,
    publicphotos: state.file.publicphotos,
    ratedPhotos: state.file.ratedPublicPhotos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShowCase);
