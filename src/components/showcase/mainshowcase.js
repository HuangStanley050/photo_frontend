import React, { useEffect } from "react";
import ShowCaseList from "./showcaselist";
import { connect } from "react-redux";
import { load_PublicPhotos } from "../../store/actions/files";
import Spinner from "../spinner/spinner";

const MainShowCase = props => {
  useEffect(() => {
    props.load();
  }, []);

  let viewPortCenter = {
    position: "relative",
    top: "90%",
    left: "0",
    transform: "translateY(+30vh)"
  };

  let content;

  if (props.loading) {
    content = (
      <div style={viewPortCenter}>
        <Spinner />
      </div>
    );
  } else {
    content = <ShowCaseList publicphotos={props.publicphotos} />;
  }
  return (
    <div style={{ marginTop: "2.5rem" }} className="container">
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
    publicphotos: state.file.publicphotos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShowCase);
