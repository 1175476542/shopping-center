import { INCREMENT,DECREMENT } from "../action_types.js";
export const createIncrementAction = value=>({type:INCREMENT,data:value*1})

export const createDecrementAction = value=>({type:DECREMENT,data:value*1})
  
export const createIncrementAsyncAction = (value,delay)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(createIncrementAction(value))
    }, delay);
  }
  // setTimeout(() => {
  //   return {type:INCREMENT,data:value*1}
  // }, delay);
}