import axios from 'axios'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// http request 请求拦截器
service.interceptors.request.use(
  config => {
    const AccessToken = localStorage.getItem('lp_token')
    if (AccessToken) {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      config.headers['Token'] = AccessToken
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 响应拦截器
service.interceptors.response.use(

  response => {
    const res = response.data
    // 处理登录失效
    // if (res.code == -1) {
    //   return router.replace({
    //     path: '/',
    //     query: {
    //       redirect: router.currentRoute.fullPath
    //     }
    //   });
    // }
    return response.data;
  },
  err => {
    if (err && err.response && err.response.status) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录";
          break;
        case 403:
          err.message = "拒绝访问，请重新登录";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = "连接错误";
      }
    }
    // 弹窗提示错误+状态码
    // Message.error(err.message + ' ' + err.response.status);


    // if (err.response.data.message) {
    //   Notice.error({
    //     title: '系统出错',
    //     desc: err.response.data.message
    //   });
    // }
    
    return Promise.reject(err)
  }
)

export default service
