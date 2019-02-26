import React from "react";
import api_routes from "../../api_routes/routes";

const ShowCase = ({ id, name }) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={api_routes.loadPublicImage + id} className="img-thumbnail" />
      </div>
    </div>
  );
};

export default ShowCase;
