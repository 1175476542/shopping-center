import React, { Component } from 'react'
import screenFull from 'screenfull';
import dayjs from 'dayjs';
import { withRouter } from "react-router-dom";
import './css/header.less'
import { FullscreenOutlined,FullscreenExitOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import { Button,Modal  } from "antd";
import weather from "./imgs/1.jpg";
import { connect } from "react-redux";
import { createDeleteUserInfoAction } from "../../../redux/action_creators/login_action";
const { confirm } = Modal; 


class Header extends Component {
  state = {
    isFull:false,
    date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss')
  }
  fullScreen = ()=>{
    screenFull.toggle()
  }
  componentDidMount(){ 
    screenFull.on('change',()=>{
      let isFull = !this.state.isFull
      this.setState({isFull:isFull}) 
      console.log(this.state.isFull)
    })
    this.timeID = setInterval(() => {
      this.setState({
        date:dayjs().format('YYYY年 MM月 DD日 HH:mm:ss')
      })
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timeID)
  }
  logout = ()=>{
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定退出？',
      okText:'确定',
      cancelText:'取消',
      onOk:()=> {
        this.props.deleteUser()
      },
    }); 
    //this.props.deleteUser()
  }
  render() {
    let {isFull} = this.state
    let {user} = this.props.userInfo
    return (
      <header className='header'>
        <div className='header-top'>
          <Button size='small' onClick={this.fullScreen}>
            {
              (isFull)? <FullscreenOutlined />:<FullscreenExitOutlined />
            }
            
            </Button>
          <span className='username'>欢迎，{user.username}</span>
          <Button type="link" size='small' onClick={this.logout}>退出登录</Button>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>
            {this.props.location.pathname}
          </div>
          <div className='header-bottom-right'>
            {this.state.date}
            <img src={weather} alt="天气信息" />
            晴 温度2~5
          </div>
        </div>
      </header>
    )
  }
}

export default connect(
  state =>({userInfo:state.userInfo}),
  {
    deleteUser:createDeleteUserInfoAction
  }
)(withRouter(Header))
