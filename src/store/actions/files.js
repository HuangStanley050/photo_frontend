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

const upload_image_start = () => {
  return {
    type: actionTypes.UPLOAD_IMAGE
  };
};

const upload_image_fail = () => {
  return {
    type: actionTypes.UPLOAD_IMAGE_FAIL
  };
};

const upload_image_success = imgData => {
  return {
    type: actionTypes.UPLOAD_IMAGE_SUCCESS,
    payload: imgData
  };
};

const make_public_start = () => {
  return {
    type: actionTypes.MAKE_PUBLIC_START
  };
};

const make_public_fail = () => {
  return {
    type: actionTypes.MAKE_PUBLIC_FAIL
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

export const upload_image = imageData => {
  return dispatch => {
    dispatch(upload_image_start());
    axios({
      method: "post",
      url: api_routes.uploadImage,
      data: imageData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(res => {
        console.log(res.data.photoName);
        dispatch(upload_image_success(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(upload_image_fail());
      });
  };
};

export const make_public = (photoId, photoName) => {
  return dispatch => {
    if (window.confirm("Are you sure? Making photo pubic?")) {
      console.log(photoId, photoName);
      dispatch(make_public_start());
    }
  };
};
