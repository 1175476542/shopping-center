import Counter from "../components/counter"
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from "../redux/actions/counter_action";
import { connect } from "react-redux";
// 完整方式
// function mapStateToProps(state) {
//   return {count:state}
// }
// 简写方式
// let mapStateToProps = state=>({count:state})
// 完整方式
// function mapDispatchToProps(dispatch) {
//   return {
//     increment:(value)=>{dispatch(createIncrementAction(value))},
//     decrement:(value)=>{dispatch(createDecrementAction(value))}
//   }
// }
// 简写方式
// let mapDispatchToProps = dispatch =>(
//   {
//     increment:(value)=>{dispatch(createIncrementAction(value))},
//     decrement:(value)=>{dispatch(createDecrementAction(value))}
//   }
// )
  
 
export default connect(state=>({count:state.count,person:state.person}),
{
  increment:createIncrementAction,
  decrement:createDecrementAction,
  incrementAsync:createIncrementAsyncAction,
}
)(Counter)