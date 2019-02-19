import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  photos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_IMAGES_START:
    case actionTypes.UPLOAD_IMAGE:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOAD_IMAGES_FAIL:
    case actionTypes.UPLOAD_IMAGE_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOAD_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...action.payload]
      };
    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, action.payload]
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        photos: []
      };

    default:
      return state;
  }
};

export default reducer;
