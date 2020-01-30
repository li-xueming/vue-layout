/* eslint-disable no-unused-vars */
import axios from 'axios'

import LogUtils from '@/assets/js/utils/logUtil'

class DispatcherError {
  static dispatch (response) {
    const { status, message, reason } = response
    // console.dir(response)
    if (DispatcherError.handlers.has(status)) {
      let handler = DispatcherError.handlers.get(status)
      return handler(message, reason)
    }
    return Promise.reject(new Error(message))
  }

  static handlers = new Map()
}

let requestInterceptors = {
  success: config => {
    return config
  },
  error: error => {
    return Promise.reject(error)
  }
}

let responseInterceptors = {
  success: response => {
    return response.data
  },
  error: error => {
    if (error.response) {
      return DispatcherError.dispatch(error.response)
    } else if (error.request) {
      return Promise.reject(error)
    }
    return Promise.reject(error.response.data)
  }
}

class AxiosPlugin {
  install (Vue, option) {
    this.instance = axios.create(option)

    this.instance.interceptors.request.use(requestInterceptors.success, requestInterceptors.error)
    this.instance.interceptors.response.use(responseInterceptors.success, responseInterceptors.error)

    Vue.prototype.$axios = this.instance
    Vue.prototype.$get = this.instance.get
    Vue.prototype.$post = this.instance.post
    Vue.prototype.$delete = this.instance.delete
    Vue.prototype.$put = this.instance.put
    Vue.prototype.$patch = this.instance.patch
    LogUtils.debug('system', '加载axios插件')
  }

  getInstance () {
    return this.instance || new Error('未初始化')
  }
}

let AxiosPluginInstance = new AxiosPlugin()

export default AxiosPluginInstance
