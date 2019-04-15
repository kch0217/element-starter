import axios from 'axios'
import _ from 'lodash'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
import { Loading } from 'element-ui';

const http = axios.create({
  // baseURL: 'http://10.89.88.83:5565',
  baseURL: `${window.location.protocol}//${window.location.hostname}:1234`,
  // baseURL: 'http://localhost:5000',
  withCredentials: true,
  timeout: 17000,
  // adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, true))
})

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Loading.service({ fullscreen: true });
  return config
}, function (error) {
  // Do something with request error
  Loading.service({ fullscreen: true }).close()
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
  // Do something with response data
  Loading.service({ fullscreen: true }).close()
  if (response.headers && response.headers['content-type'] !== 'application/json') {
    throw new Error('Error when getting data from server')
  }
  return response
}, function (error) {
  // Do something with response error
  Loading.service({ fullscreen: true }).close()
  if (error.response && (error.response.headers['content-type'] !== 'application/json' || error.response.status >= 400)) {
    throw new Error(_.get(error.response, 'data.error', 'Error when getting data from server'))
  }
  throw error
})

export default {
  http
}
