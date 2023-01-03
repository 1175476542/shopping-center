import React,{Component} from 'react'
import { connect } from "react-redux";
import './css/login.less';
import logo from "./imgs/logo.png"
import { Form,Input,Button } from "antd";
import { createDemo1Action,createDemo2Action } from "../../redux/action_creators/test_action";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
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
    const onFinish = (values) => {
      console.log(values);
      this.props.demo2('111')
    };
    return(
      <div className='login'>
        <header>
          <img src={logo} alt="" /> 
          <h1>商品管理系统{this.props.test}</h1>
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
  state=>({test:state.test}),
  {
    demo1:createDemo1Action,
    demo2:createDemo2Action
  }
)(Login)