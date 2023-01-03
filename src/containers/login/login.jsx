import React,{Component} from 'react'
import { connect } from "react-redux";
import { Form,Input,Button, message } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";
import {reqLogin} from "../../api/index";
import './css/login.less';
import logo from "./imgs/logo.png"
import { createSaveUserInfoAction } from "../../redux/action_creators/login_action";
const {Item} = Form
class Login extends Component{
  state = {}
    componentDidMount(){
      console.log(this.props)
    }
    handleSubmit = (event)=>{
      event.preventDefault()
      this.props.demo1('111')
    }
  render(){
    const {isLogin} = this.props
    console.log(isLogin)
    if (isLogin) {
      return <Redirect to="/admin"/>
    }
    const onFinish = async(values) => {
      console.log(values);
      const {username,password} = values
      // reqLogin(username,password)
      // .then((result)=>{
      //   console.log(result)
      // })
      // .catch((reason)=>{
      //  console.log(reason) 
      // })
      let result = await reqLogin(username,password)
      console.log(result)
      const {status,msg,data} = result
      if (status === 0) {
        //1.服务器返回的user信息，还有token交给redux管理
        this.props.saveUserInfo(data)
        //2.跳转到admin
        this.props.history.replace('/admin')
        console.log(data)
      }else{
        message.error(msg,1)
      }
    };
    return(
      <div className='login'>
        <header>
          <img src={logo} alt="" /> 
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Item
        name="username"
        rules={[
          { required: true, message: '请输入用户名' },
          {max:12,message:'最多为12位'},
          {min:4,message:'最少4位'},
          {pattern:/^\w+$/,message:'用户名必须为字母、数字、下划线'}
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Item>
      <Item
        name="password"
        rules={
          [
          { required: true, message: '请输入密码' },
          {max:12,message:'最多为12位'},
          {min:4,message:'最少4位'},
          {pattern:/^\w+$/,message:'密码必须为字母、数字、下划线'}
         ]
      }
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Item>
      <Item className='btn'>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Item>
    </Form>
        </section>
      </div>
    )
  }
}


export default connect(
  state=>({isLogin:state.userInfo.isLogin}),
  {
    saveUserInfo:createSaveUserInfoAction,
  }
)(Login)