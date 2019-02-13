import React, { useState } from "react";
import { register, login } from "../../store/actions/auth";
import { connect } from "react-redux";

const AuthForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="form-group">
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
    login: userData => dispatch(login(userData))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
