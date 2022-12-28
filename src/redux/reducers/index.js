import counterReducer from "./counter_reducer";
import personReducer from "./person_reducer";
import { combineReducers } from "redux";

//store中保存了所有组件的转台，是一个一般对象
// {
//   key:qqq
//   key1:www
// }

//combineReducers接收一个对象作为参数，对象中的key就是store中保存状态的key
//对象中的value就是store中保存该状态的value
export default combineReducers({
  count:counterReducer,
  person:personReducer
})

//store中保存的state为
// {
//   count:0,
//   person:[]
// }