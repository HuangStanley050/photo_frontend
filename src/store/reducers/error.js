import * as actionTypes from "../actions/actionTypes";
const initialState = {
  error: null,
  type: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ERROR) {
    console.log(action.payload);
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
      type: ""
    };
  }

  return state;
};

export default reducer;
