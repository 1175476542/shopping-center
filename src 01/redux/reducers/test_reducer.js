
import { TEST1,TEST2 } from "../action_types";
let initState = 'hello'
export default function test(preState = initState,action) {
  const {type,data} = action
  let newState
  switch (type) {
    case TEST1:
      return newState = preState + data
    case TEST2:
      return newState = preState + data + '!'
    default:
      return preState
  }
}