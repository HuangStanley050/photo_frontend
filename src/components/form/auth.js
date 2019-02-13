import React, { useState, useEffect } from "react";
import { register, login } from "../../store/actions/auth";
import { connect } from "react-redux";
import { CLEAR_ERROR } from "../../store/actions/actionTypes";

const AuthForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("created");
    return () => {
      console.log("clean up");
      props.clear_error();
    };
  }, []);

  const inputHandler = e => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    //console.log(name, email, password);
    if (props.isLogin) {
      const userData = {
        email,
        password
      };

      props.login(userData);
      setEmail("");
      setPassword("");
    } else {
      const userData = {
        name,
        email,
        password
      };
      setName("");
      setEmail("");
      setPassword("");
      props.register(userData);
    }
  };

  let errorMessage = null;

  if (props.errorMsg) {
    errorMessage = (
      <div>
        <h3 style={{ color: "red" }}>{props.errorMsg}</h3>
      </div>
    );
    console.log(errorMessage);
  }

  if (props.auth.isAuthenticate) {
    props.history.push("/main");
  }
  return (
    <div className="container" style={{ marginTop: "35px" }}>
      <div className="row">
        <div className="col-md-8 m-auto">
          <form onSubmit={submitForm}>
            {props.isRegister ? (
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  onChange={inputHandler}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Firstname Lastname"
                  value={name}
                />
              </div>
            ) : null}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                onChange={inputHandler}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group has-danger">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={inputHandler}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
              />
            </div>
            {errorMessage}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    register: userData => dispatch(register(userData)),
    login: userData => dispatch(login(userData)),
    clear_error: () => dispatch({ type: CLEAR_ERROR })
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errorMsg: state.error.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
