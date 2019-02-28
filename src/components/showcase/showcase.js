import React, { useState } from "react";
import api_routes from "../../api_routes/routes";
import StarRating from "../starrating/starrating";
import { connect } from "react-redux";

const ShowCase = ({ id, name, auth }) => {
  const [starBtn1, setStarBtn1Status] = useState(false);
  const [starBtn2, setStarBtn2Status] = useState(false);
  const [starBtn3, setStarBtn3Status] = useState(false);
  const [starBtn4, setStarBtn4Status] = useState(false);

  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={api_routes.loadPublicImage + id} className="img-thumbnail" />
      </div>
      {auth.isAuthenticate ? (
        <StarRating
          st1Status={starBtn1}
          st2Status={starBtn2}
          st3Status={starBtn3}
          st4Status={starBtn4}
          set1={setStarBtn1Status}
          set2={setStarBtn2Status}
          set3={setStarBtn3Status}
          set4={setStarBtn4Status}
        />
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
