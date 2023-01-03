
import { SAVE_USER_INFO, DELETE_USER_INFO } from "../action_types";

let user = JSON.parse(localStorage.getItem('user'))
let token = localStorage.getItem('user')

let initState = {
  user: user || '',
  token: token || '',
  isLogin: user && token ? true : false
}
export default function loginRducer(preState = initState, action) {
  const { type, data } = action
  let newState
  switch (type) {
    case SAVE_USER_INFO:
      return newState = { user: data.user, token: data.token, isLogin: true }
    case DELETE_USER_INFO:
      return newState = { user:'', token: '', isLogin: false }
    default:
      return preState
  }
}