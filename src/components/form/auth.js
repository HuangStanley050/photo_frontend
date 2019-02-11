import React from "react";
import { connect } from "react-redux";

const AuthForm = props => {
  return <div>{props.isLogin ? <h1>Login</h1> : <h1>Register</h1>}</div>;
};

export default AuthForm;
