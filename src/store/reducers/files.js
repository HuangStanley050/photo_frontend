import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  photos: [],
  showcase: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_IMAGES_START:
    case actionTypes.UPLOAD_IMAGE:
    case actionTypes.MAKE_PUBLIC_START:
    case actionTypes.UNMAKE_PUBLIC_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOAD_IMAGES_FAIL:
    case actionTypes.UPLOAD_IMAGE_FAIL:
    case actionTypes.MAKE_PUBLIC_FAIL:
    case actionTypes.UNMAKE_PUBLIC_FAIL:
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
    case actionTypes.MAKE_PUBLIC_SUCCESS:
      //console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        showcase: action.payload
      };
    case actionTypes.UNMAKE_PUBLIC_SUCCESS:
      return {
        ...state,
        loading: false,
        showcase: action.payload
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
