import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/actions/auth";

const Navbar = props => {
  const NotAuthed = (
    <React.Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    </React.Fragment>
  );

  const Authed = (
    <React.Fragment>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/main">
          DashBoard <span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <a onClick={props.logout} className="nav-link" href="#">
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
            <NavLink className="nav-link" to="/showcase">
              Public
            </NavLink>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
