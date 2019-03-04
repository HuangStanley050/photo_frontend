import * as actionTypes from "../actions/actionTypes";
const initialState = {
  error: null,
  type: "",
  photoId: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ERROR) {
    //console.log(action.payload);
    return {
      ...state,
      error: action.payload.message,
      type: action.payload.type
    };
  }
  if (action.type === actionTypes.CLEAR_ERROR) {
    return {
      ...state,
      error: null,
      type: "",
      photoId: ""
    };
  }
  if (action.type === actionTypes.MAKE_PUBLIC_ERROR) {
    return {
      ...state,
      error: action.payload.message,
      type: action.payload.type,
      photoId: action.payload.photoId
    };
  }
  if (action.type === actionTypes.REVIEW_PHOTO_ERROR) {
    return {
      ...state,
      error: action.payload.message,
      type: action.payload.type,
      photoId: action.payload.photoId
    };
  }

  return state;
};

export default reducer;
