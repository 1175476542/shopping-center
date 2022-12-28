 import React,{Component} from 'react'
 import CounterContainer from "./containers/count_container"
 export default class App extends Component{
  state = {}
  render(){
    return(
      <div>
        <CounterContainer/>
      </div>
    )
  }
 }