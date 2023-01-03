import React,{Component} from 'react'
import { connect } from "react-redux";
import { createDemo1Action,createDemo2Action } from "../../redux/action_creators/test_action";
class Admin extends Component{
  state = {}
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>Admin</div>
    )
  }
}

export default connect(
  state=>({peiqi:state.test}),
  {
    demo1:createDemo1Action
  }
)(Admin)