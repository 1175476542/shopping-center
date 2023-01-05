import axios from "axios";
import qs from "qs";
import { message } from "antd";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from "../redux/store.js";
import { createDeleteUserInfoAction } from "../redux/action_creators/login_action";

const instance = axios.create({
  timeout: 4000
})
//请求拦截器
instance.interceptors.request.use(function (config) {
  NProgress.start()
  //从redux中获取token
  const { token } = store.getState().userInfo
  if (token) {
    //向请求头中添加token
    config.headers.Authorization = 'atguigu_' + token
  }
  const { method, data } = config
  if (method.toLowerCase() === 'post') {
    if (data instanceof Object) {
      config.data = qs.stringify(data)
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error)
});

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      message.error('身份校验失败，请重新登录', 1)
      store.dispatch(createDeleteUserInfoAction())
    } else {
      message.error(error.message, 1)
    }
    return new Promise(() => { })
  });

export default instance