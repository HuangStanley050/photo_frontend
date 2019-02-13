import * as actionTypes from "../actions/actionTypes";
const initialState = {
  error: null
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ERROR) {
    return {
      ...state,
      error: action.payload
    };
  }
  if (actionTypes === actionTypes.CLEAR_ERROR) {
    return {
      ...state,
      error: null
    };
  }

  return state;
};

export default reducer;
