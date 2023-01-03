import { combineReducers } from "redux";
import loginRducer from "./login_reducer";

export default combineReducers({
  userInfo:loginRducer
})