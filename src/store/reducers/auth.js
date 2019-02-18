import * as actionTypes from "../actions/actionTypes";
const initialState = {
  isAuthenticate: false,
  loading: false,
  userInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticate: false,
        loading: false,
        userInfo: {}
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticate: true,
        userInfo: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
