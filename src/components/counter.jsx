import React,{Component} from 'react';
// import {createIncrementAction,createDecrementAction} from "./redux/action_creators.js"
export default class Counter extends Component{
  // state = {
  //   count:0
  // }
componentDidMount (){
  console.log(this.props)
}
  increment = ()=>{
    let {value}  = this.refs.selectNumber
    // this.props.store.dispatch(createIncrementAction(value*1))
    // this.setState({count:count+value*1})
    this.props.increment(value*1)
  }
  decrement = ()=>{
    // let {value}  = this.refs.selectNumber
    // let {count} = this.state
    // this.setState({count:count-value*1})
    let {value}  = this.refs.selectNumber
    // this.props.store.dispatch(createDecrementAction(value*1))
    this.props.decrement(value*1)
  }
  ifodd = ()=>{
    let {value}  = this.refs.selectNumber
    // let count  = this.props.store.getState()
    // let {count} = this.state
    if(this.props.count%2 !== 0){
    // this.props.store.dispatch(createIncrementAction(value*1))
      // this.setState({count:count+value*1})
    this.props.increment(value*1)
  }
  }
  incrementAsync =()=>{
    let {value}  = this.refs.selectNumber
    // let {count} = this.state
    setTimeout(() => {
    // this.props.store.dispatch(createIncrementAction(value*1))
      // this.setState({count:count+value*1})
    this.props.incrementAsync(value*1,1000)
  }, 1000);
  }
  render(){
    // let count = this.props.store.getState()
    // console.log(count)
    // let {count} = this.state
      return(
      <div>
        <h3>当前计数为{this.props.count},当前人数为：{this.props.person.length}</h3>
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