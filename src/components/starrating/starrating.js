import React, { useState } from "react";
import { connect } from "react-redux";

const StarRating = props => {
  const [star1, setStar1] = useState(null);
  const [star2, setStar2] = useState(null);
  const [star3, setStar3] = useState(null);
  const [star4, setStar4] = useState(null);

  const highlight = { color: "orange" };

  const add_or_remove = star => {
    switch (star) {
      case "star1":
        props.addStar(1);
        setStar1(highlight);
        if (props.ratings === 2 || props.ratings === 3 || props.ratings === 4) {
          setStar2(null);
          setStar3(null);
          setStar4(null);
        }
        break;
      case "star2":
        props.addStar(2);
        setStar1(highlight);
        setStar2(highlight);
        if (props.ratings === 3 || props.ratings === 4) {
          setStar3(null);
          setStar4(null);
        }

        break;

      case "star3":
        props.addStar(3);
        setStar1(highlight);
        setStar2(highlight);
        setStar3(highlight);
        if (props.ratings === 4) {
          setStar4(null);
        }
        break;

      case "star4":
        props.addStar(4);
        setStar1(highlight);
        setStar2(highlight);
        setStar3(highlight);
        setStar4(highlight);
        break;

      default:
        break;
    }
  };

  const addStar = e => {
    switch (e.target.id) {
      case "star1":
        add_or_remove("star1");

        break;
      case "star2":
        add_or_remove("star2");

        break;
      case "star3":
        add_or_remove("star3");

        break;
      case "star4":
        add_or_remove("star4");

        break;
      default:
        break;
    }
  };

  let reviewers = [];
  let rating = null;
  let starContents = (
    <React.Fragment>
      <i id="star1" onClick={addStar} style={star1} className="fa fa-star" />
      <i id="star2" onClick={addStar} style={star2} className="fa fa-star" />
      <i id="star3" onClick={addStar} style={star3} className="fa fa-star " />
      <i id="star4" onClick={addStar} style={star4} className="fa fa-star" />
    </React.Fragment>
  );

  if (props.reviewed) {
    props.reviewPhotos.map(photo => {
      if (photo.id === props.reviewed) {
        reviewers = [...photo.reviewers];
      }
      return null;
    });
  }

  reviewers.find(reviewer => {
    if (reviewer.reviewerId === props.currentUser) {
      rating = reviewer.ratings;
      starContents = [];
      for (let i = 0; i < rating; i++) {
        starContents.push(
          <i key={i} style={highlight} className="fa fa-star" />
        );
      }
    }
  });

  return (
    <div>
      {starContents}
      {/*{props.reviewed ? <span>reviewed {rating} </span> : null}*/}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviewPhotos: state.file.ratedPublicPhotos,
    currentUser: state.auth.userInfo.id
  };
};

export default connect(mapStateToProps)(StarRating);
