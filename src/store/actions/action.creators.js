import * as types from "./action.types";

export const getProfile = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_PROFILE,
      payload,
    });
  };
};

export const clearProfile = () => {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_PROFILE,
    });
  };
};
