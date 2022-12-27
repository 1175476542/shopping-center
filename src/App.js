import React,{Component} from 'react';
import {createIncrementAction,createDecrementAction} from "./redux/action_creators.js"
export default class App extends Component{
  // state = {
  //   count:0
  // }

  increment = ()=>{
    let {value}  = this.refs.selectNumber
    this.props.store.dispatch(createIncrementAction(value*1))
    // this.setState({count:count+value*1})
  }
  decrement = ()=>{
    // let {value}  = this.refs.selectNumber
    // let {count} = this.state
    // this.setState({count:count-value*1})
    let {value}  = this.refs.selectNumber
    this.props.store.dispatch(createDecrementAction(value*1))
    console.log(this.props.store)
  }
  ifodd = ()=>{
    let {value}  = this.refs.selectNumber
    let count  = this.props.store.getState()
    // let {count} = this.state
    if(count%2 !== 0){
    this.props.store.dispatch(createIncrementAction(value*1))
      // this.setState({count:count+value*1})
    }
  }
  incrementAsync =()=>{
    let {value}  = this.refs.selectNumber
    // let {count} = this.state
    setTimeout(() => {
    this.props.store.dispatch(createIncrementAction(value*1))
      // this.setState({count:count+value*1})
    }, 1000);
  }
  render(){
    let count = this.props.store.getState()
    console.log(count)
    // let {count} = this.state
      return(
      <div>
        <h3>当前计数为{count}</h3>
        <select ref = "selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.ifodd}>奇数+</button>
        <button onClick={this.incrementAsync}>异步+</button>
      </div>
    )
  }
}