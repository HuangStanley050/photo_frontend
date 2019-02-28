import React, { useState } from "react";

const StarRating = props => {
  const [star1, setStar1] = useState(null);
  const [star2, setStar2] = useState(null);
  const [star3, setStar3] = useState(null);
  const [star4, setStar4] = useState(null);

  const addStar = e => {
    switch (e.target.id) {
      case "star1":
        if (star1 !== null) {
          setStar1(null);
          props.set1(false);
        } else {
          setStar1({ color: "orange" });
          props.set1(true);
        }
        break;
      case "star2":
        if (star2 !== null) {
          setStar2(null);
        } else {
          setStar2({ color: "orange" });
        }
        break;
      case "star3":
        if (star3 !== null) {
          setStar3(null);
        } else {
          setStar3({ color: "orange" });
        }
        break;
      case "star4":
        if (star4 !== null) {
          setStar4(null);
        } else {
          setStar4({ color: "orange" });
        }
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
