import * as actionTypes from "./actionTypes";
import axios from "axios";
import api_routes from "../../api_routes/routes";
/*global localStorage */

const load_images_start = () => {
  return {
    type: actionTypes.LOAD_IMAGES_START
  };
};

const load_images_fail = () => {
  return {
    type: actionTypes.LOAD_IMAGES_FAIL
  };
};

const load_images_success = imagesURLs => {
  return {
    type: actionTypes.LOAD_IMAGES_SUCCESS,
    payload: imagesURLs
  };
};

export const load_images = () => {
  return dispatch => {
    dispatch(load_images_start());
    axios({
      method: "get",
      url: api_routes.loadImages,

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(res => {
        dispatch(load_images_success(res.data));
        //console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        dispatch(load_images_fail());
      });
  };
};
