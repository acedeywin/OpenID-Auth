import { combineReducers } from "redux";
import profileReducer from "../reducers/profile.reducer";

export default combineReducers({
  mode: "test",
  profileReducer,
});
