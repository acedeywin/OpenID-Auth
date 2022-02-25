import * as type from "../actions/action.types";
import { combineReducers } from "redux";

const initialState = {
  loading: false,
  failed: false,
  user_profile: {},
  failed_msg: "",
};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PROFILE:
      return {
        ...state,
        loading: false,
        user_profile: action.payload,
      };
    case type.CLEAR_PROFILE:
      return {
        loading: false,
        failed: false,
        user_profile: {},
        failed_msg: "",
      };
    case type.ERROR_OCCURED:
      return {
        ...state,
        loading: false,
        failed: true,
        failed_msg: action.payload,
      };
    default:
      return state;
  }
};

const profileReducer = combineReducers({
  profile: getProfileReducer,
});

export default profileReducer;
