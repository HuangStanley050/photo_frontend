import * as actionTypes from "../actions/actionTypes";
const initialState = {
  isAuthenticate: false,
  loading: false,
  userInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
