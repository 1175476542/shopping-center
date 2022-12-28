import { INCREMENT,DECREMENT } from "../action_types";
let initState = 0
export default function opera(preState = initState,action) {
  let {type,data} = action
  console.log('---------reducer调用了-----------',action)
  let newState
  switch (type) {
    case INCREMENT:
       newState = preState+data
       console.log(newState)
       return newState
    case DECREMENT:
       newState = preState-data 
       return newState
    default: 
    return preState
  }
}