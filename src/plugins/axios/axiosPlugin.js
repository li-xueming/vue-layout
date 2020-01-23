/* eslint-disable no-unused-vars */
import axios from 'axios'

class DispatcherError {
  static dispatch ({ status, message, reason }) {
    if (DispatcherError.handlers.has(status)) {
      let handler = DispatcherError.handlers.get(status)
      handler(message, reason)
    }
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
      DispatcherError.dispatch(error.response)
    } else if (error.request) {
      return Promise.reject(error)
    }
    return Promise.reject(error.response.data)
  }
}

class AxiosPlugin {
  install (Vue, option) {
    let instance = axios.create(option)

    instance.interceptors.request.use(requestInterceptors.success, requestInterceptors.error)
    instance.interceptors.response.use(responseInterceptors.success, responseInterceptors.error)

    Vue.prototype.$axios = instance
    Vue.prototype.$get = instance.get
    Vue.prototype.$post = instance.post
    Vue.prototype.$delete = instance.delete
    Vue.prototype.$put = instance.put
    Vue.prototype.$patch = instance.patch
  }
}

export default new AxiosPlugin()
