import * as actionTypes from "./actionTypes";
import api_routes from "../../api_routes/routes";
import axios from "axios";
import jwt_decode from "jwt-decode";
/*global localStorage */

const register_start = () => {
  return {
    type: actionTypes.REGISTER_START
  };
};

const register_fail = () => {
  return {
    type: actionTypes.REGISTER_FAIL
  };
};

const register_success = payload => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload
  };
};

const login_start = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

const login_fail = () => {
  return {
    type: actionTypes.LOGIN_FAIL
  };
};

const login_success = payload => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload
  };
};

const set_user = userName => {
  return {
    type: actionTypes.SET_USER,
    payload: userName
  };
};

//==============async actions===============================//

export const login = userData => {
  return dispatch => {
    dispatch(login_start());
    axios
      .post(api_routes.login, userData)
      .then(res => {
        const { token, userName } = res.data;
        localStorage.setItem("jwtToken", token);
        const decoded = jwt_decode(token);
        //console.log(decoded);
        dispatch(login_success(decoded));
        dispatch(set_user(userName));
      })
      .catch(err => {
        console.log(err);
        dispatch(login_fail());
      });
  };
};

export const register = userData => {
  return dispatch => {
    dispatch(register_start());

    axios
      .post(api_routes.register, userData)
      .then(res => {
        console.log(res);
        dispatch(register_success(res.data));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(register_fail());
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    dispatch(login_fail());
  };
};
