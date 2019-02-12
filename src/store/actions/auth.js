import * as actionTypes from "./actionTypes";
import api_routes from "../../api_routes/routes";
import axios from "axios";

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
