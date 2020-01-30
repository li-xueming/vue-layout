import LogUtils from '@/assets/js/utils/logUtil'
const config = {
  // 请求授权地址
  userAuthorizationUri: 'https://github.com/login/oauth/authorize',
  // accessToken请求地址
  accessTokenUri: '/github/login/oauth/access_token',
  // 用户信息请求地址
  userInfoUri: 'https://api.github.com/user',
  // 登出请求地址
  logoutUri: 'https://github.com/logout',
  // 项目地址
  localuri: 'http://localhost:3000/',
  // 回调地址
  redirect_uri: 'http://localhost:3000/login',
  // 案例资源服务器地址
  resUri: 'http://localhost:8080',
  // 客户端相关标识，请从认证服务器申请
  clientId: 'c462e7734220a9daaf49',
  client_secret: 'ae9a59416c00dbabac6b18facbdd09542dcc92b1',
  // 申请的权限范围
  scope: 'user',
  // 可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
  state: '',
  // 一些固定的请求参数
  response_type: 'token',
  grant_type: 'authorization_code',
  code: ''
}

class AuthGithubPlugin {
  constructor (option) {
    this.option = config
  }
  install (Vue, option) {
    option = Object.assign(this.option, option)
    Vue.prototype.$auth = Object.assign({}, Vue.prototype.$auth)
    Vue.prototype.$auth.github = option
    LogUtils.debug('system', 'auth-github加载完成')
  }
}

export default new AuthGithubPlugin(config)
