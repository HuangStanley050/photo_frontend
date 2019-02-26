import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ marginTop: "4rem" }} className="container">
      <div className="row">
        <div className="hero-unit">
          <h1>
            Page Not Found <small style={{ color: "red" }}>Error 404</small>
          </h1>
          <br />
          <p>
            The page you requested could not be found, either contact your
            webmaster or try again. Use your browsers <b>Back</b> button to
            navigate to the page you have prevously come from
          </p>
          <p>
            <b>Or you could just press this neat little button:</b>
          </p>
          <NavLink to="/login" className="btn btn-large btn-info">
            <i className="icon-home icon-white" /> Take Me Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
