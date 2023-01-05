import { Button, Layout } from 'antd';
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect,Route,Switch } from "react-router-dom";
import { createDeleteUserInfoAction } from "../../redux/action_creators/login_action";
import Home from '../../components/home/home'
import Category from '../category/category'
import Bar from '../bar/bar'
import Line from '../line/line'
import Pie from '../pie/pie'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import "./css/admin.less";
import Header from "./header/header";
const { Footer, Sider, Content } = Layout;
class Admin extends Component {
  state = {}
  componentDidMount() {
    console.log(this.props)
  }
  logout = () => {
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
          <Layout className='admin'>
            <Sider className='sider'>Sider</Sider>
            <Layout>
              <Header className='header'>Header</Header>
              <Content className='content'>
                <Route path='/admin/home' component = {Home} />
                <Route path='/admin/prod_about/category' component = {Category} />
                <Route path='/admin/prod_about/product' component = {Product} />
                <Route path='/admin/charts/bar' component = {Bar} />
                <Route path='/admin/charts/line' component = {Line} />
                <Route path='/admin/charts/pie' component = {Pie} />
                <Route path='/admin/role' component = {Role} />
                <Route path='/admin/user' component = {User} />
                <Redirect to = '/admin/home'/>
              </Content>
              <Footer className='footer'>推荐使用谷歌浏览器，获取最佳用户体验</Footer>
            </Layout>
          </Layout>
        </>
      )
    }

  }
}

export default connect(
  state => ({ userInfo: state.userInfo }),
  {
    deleteUserInfo: createDeleteUserInfoAction
  }
)(Admin)