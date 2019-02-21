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

const make_public_success = publicPhotos => {
  return {
    type: actionTypes.MAKE_PUBLIC_SUCCESS,
    payload: publicPhotos
  };
};

const unmakePublic_start = () => {
  return {
    type: actionTypes.UNMAKE_PUBLIC_START
  };
};

const unmakePublic_fail = () => {
  return {
    type: actionTypes.UNMAKE_PUBLIC_FAIL
  };
};

const unmakePublic_success = updatedList => {
  return {
    type: actionTypes.UNMAKE_PUBLIC_SUCCESS,
    payload: updatedList
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
        //console.log(res.data);
        dispatch(load_images_success(res.data.photos));
        dispatch({
          type: actionTypes.LOAD_PUBLIC_IMAGES_SUCCESS,
          payload: res.data.publicPhotos
        });
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
  return (dispatch, getState) => {
    if (window.confirm("Are you sure? Making photo pubic?")) {
      //check to see if the photo is already in public collection

      // let showcase = getState().file.showcase;

      // if (showcase.find(photo => photo.photoId === photoId)) {
      //   console.log("photo is already in public ", photoId);
      // }

      dispatch(make_public_start());
      axios({
        method: "post",
        url:
          api_routes.makePublic + `photoId=${photoId}&photoName=${photoName}`,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
        .then(res => {
          //console.log(res.data.showCase);
          dispatch(make_public_success(res.data.showCase));
          dispatch({ type: actionTypes.CLEAR_ERROR });
        })
        .catch(err => {
          const error = {
            type: "file",
            message: err.response.data.message,
            photoId: err.response.data.data
          };
          console.log(err.response.data);
          dispatch(make_public_fail());
          dispatch({ type: actionTypes.MAKE_PUBLIC_ERROR, payload: error });
        });
    }
  };
};

export const unmakePublic = photoId => {
  return dispatch => {
    if (window.confirm("Are you sure? Hide photo from pubic?")) {
      dispatch(unmakePublic_start());
      axios({
        method: "delete",
        url: api_routes.makePublic + `photoId=${photoId}`,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
        .then(res => {
          //console.log(res.data);
          dispatch(unmakePublic_success(res.data));
          dispatch({ type: actionTypes.CLEAR_ERROR });
        })
        .catch(err => {
          //console.log(err);
          const error = {
            type: "file",
            message: err.response.data.message
          };
          dispatch(unmakePublic_fail());
          dispatch({ type: actionTypes.ERROR, payload: error });
        });
    }
  };
};

export const checkPublicPhotos = () => {
  return dispatch => {};
};
