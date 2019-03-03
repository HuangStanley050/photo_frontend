import React, { useState } from "react";
import api_routes from "../../api_routes/routes";
import StarRating from "../starrating/starrating";
import { connect } from "react-redux";

const ShowCase = ({ id, name, auth }) => {
  const [ratings, setRating] = useState(0);
  const addRating = ratings => {
    setRating(ratings);
  };

  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={api_routes.loadPublicImage + id} className="img-thumbnail" />
      </div>
      {auth.isAuthenticate ? (
        <StarRating ratings={ratings} addStar={addRating} />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ShowCase);
