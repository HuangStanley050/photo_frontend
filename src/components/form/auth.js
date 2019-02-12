import React from "react";
import { connect } from "react-redux";

const AuthForm = props => {
  return (
    <div className="container" style={{ marginTop: "35px" }}>
      <div className="row">
        <div className="col-md-8 m-auto">
          {props.isRegister ? (
            <div className="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Firstname Lastname"
              />
            </div>
          ) : null}
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
