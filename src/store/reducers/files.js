import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  photos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_IMAGES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOAD_IMAGES_FAIL:
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
    default:
      return state;
  }
};

export default reducer;