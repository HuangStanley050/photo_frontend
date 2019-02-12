import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const NotAuthed = (
    <React.Fragment>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Register
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          Login
        </a>
      </li>
    </React.Fragment>
  );

  const Authed = (
    <React.Fragment>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          DashBoard <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Logout
        </a>
      </li>
    </React.Fragment>
  );

  return (
    <nav
      style={{ padding: "1rem", backgroundColor: "#0b3c8c" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <a className="navbar-brand" href="#">
        Photo ShowCase
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Public
            </a>
          </li>
          {props.auth.isAuthenticate ? Authed : NotAuthed}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
