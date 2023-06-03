import axios from 'axios'
import store from '@/store/index'

const http = axios.create({
  baseURL: 'http://elm.ziyuan.site',
  timeout: 10000
})

//请求拦截器
http.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers.Authorization = 'Bearer ' + store.state.token
  }
  return config
})

//响应拦截器
http.interceptors.response.use(
  (rs) => {
    return rs.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default http
