import axios from 'axios'

const http = axios.create({
  baseURL: 'http://120.48.48.64:8096/api/user/',
  timeout: 5000
})

const token = localStorage.getItem('token')
// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers.token = token
    }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default http
