import React, { useState } from "react";

const StarRating = props => {
  const [star1, setStar1] = useState(null);
  const [star2, setStar2] = useState(null);
  const [star3, setStar3] = useState(null);
  const [star4, setStar4] = useState(null);

  const add_or_remove = star => {
    switch (star) {
      case "star1":
        if (props.ratings === 0) {
          props.addStar();
          setStar1({ color: "orange" });
        }
        if (props.ratings === 1) {
          props.removeStar();
          setStar1(null);
        }
        break;
      case "star2":
        if (props.ratings === 1) {
          props.addStar();
          setStar2({ color: "orange" });
        }
        if (props.ratings === 2) {
          props.removeStar();
          setStar2(null);
        }
        break;

      case "star3":
        if (props.ratings === 2) {
          props.addStar();
          setStar3({ color: "orange" });
        }
        if (props.ratings === 3) {
          props.removeStar();
          setStar3(null);
        }
        break;

      case "star4":
        if (props.ratings === 3) {
          props.addStar();
          setStar4({ color: "orange" });
        }
        if (props.ratings === 4) {
          props.removeStar();
          setStar4(null);
        }
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

  return (
    <div>
      <i id="star1" onClick={addStar} style={star1} className="fa fa-star" />
      <i id="star2" onClick={addStar} style={star2} className="fa fa-star" />
      <i id="star3" onClick={addStar} style={star3} className="fa fa-star " />
      <i id="star4" onClick={addStar} style={star4} className="fa fa-star" />
    </div>
  );
};

export default StarRating;
