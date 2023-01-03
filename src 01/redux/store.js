//最核心的管理者
import { createStore,applyMiddleware } from "redux";
import reducers from '../redux/reducers'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))