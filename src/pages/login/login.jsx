import React,{Component} from 'react'
import './css/login.less';
import logo from "./imgs/logo.png"
import { Form,Input,Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const {Item} = Form
export default class Login extends Component{
  state = {}

  render(){
    const onFinish = (values) => {
      console.log(values);
    };
    return(
      <div className='login'>
        <header>
          <img src={logo} alt="" /> 
          <h1>商品管理系统</h1>`
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
