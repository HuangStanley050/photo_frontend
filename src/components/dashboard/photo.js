import React from "react";
import api_routes from "../../api_routes/routes";

const Photo = props => {
  console.log(api_routes.loadImage + props.name);
  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img
          className="img-thumbnail"
          src={api_routes.loadImage + props.name}
        />
      </div>
    </div>
  );
};

export default Photo;