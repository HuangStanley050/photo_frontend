import React from "react";
import api_routes from "../../api_routes/routes";
import StarRating from "../starrating/starrating";
import { connect } from "react-redux";

const ShowCase = ({ id, name, auth }) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={api_routes.loadPublicImage + id} className="img-thumbnail" />
      </div>
      {auth.isAuthenticate ? <StarRating /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ShowCase);
