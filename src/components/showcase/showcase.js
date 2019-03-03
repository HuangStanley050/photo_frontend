import React, { useState } from "react";
import api_routes from "../../api_routes/routes";
import StarRating from "../starrating/starrating";
import { review_photo } from "../../store/actions/files";
import { connect } from "react-redux";

const ShowCase = ({ id, name, auth, review }) => {
  const [ratings, setRating] = useState(0);
  const addRating = ratings => {
    setRating(ratings);
  };

  const submit_review = () => {
    const data = {
      photoId: id,
      reviewerId: auth.userInfo.id,
      reviewerName: auth.userInfo.name,
      ratings: ratings
    };
    review(data);
  };

  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={api_routes.loadPublicImage + id} className="img-thumbnail" />
      </div>
      {auth.isAuthenticate ? (
        <React.Fragment>
          <StarRating ratings={ratings} addStar={addRating} />
          <button onClick={submit_review} className="btn btn-info">
            Submit Review
          </button>
        </React.Fragment>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    review: data => dispatch(review_photo(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCase);
