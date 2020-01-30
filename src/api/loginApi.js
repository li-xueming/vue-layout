import axios from '@/plugins/axios'
// 登录
let signIn = function (param) {
  // TODO 加密
  return axios.post('/api/signIn', param)
}

let afterLoginSuccess = function (router) {

}

export default {
  signIn,
  afterLoginSuccess
}
