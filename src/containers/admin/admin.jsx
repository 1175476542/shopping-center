import { Button } from 'antd';
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
class Admin extends Component {
  state = {}
  componentDidMount() {
    console.log(this.props)
  }
  logout =()=>{
    this.props.deleteUserInfo()
  }
  //在render里面想实现页面跳转最好的方法是借助<Redirect></Redirect>
  render() {
    const { user, token, isLogin } = this.props.userInfo
    if (!isLogin) {
      return <Redirect to='/login' />
    } else {
      return (
        <>
          <div>我是admin组件，你的名字是：{user.username}</div>
          <Button onClick={this.logout}>退出登录</Button>
        </>
      )
    }

  }
}

export default connect(
  state => ({ userInfo: state.userInfo }),
  {
    deleteUserInfo:createDeleteUserInfoAction
  }
)(Admin)