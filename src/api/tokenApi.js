/* eslint-disable semi */
/* eslint-disable camelcase */
import axios from '@/plugins/axios'

let getTokenFromService = function (code, callbakcState, config) {
  let { accessTokenUri, clientId: client_id, state, redirect_uri, client_secret, grant_type } = config
  if (callbakcState && callbakcState !== state) {
    return Promise.reject(new Error('oath认证失败'))
  }
  return axios.post(accessTokenUri, {
    client_id,
    client_secret,
    code,
    redirect_uri,
    grant_type
  })
}

let saveLoginInfo = function (data) {
  const access_token = data['access_token']
  if (!access_token) {
    throw new Error('无效token')
  }
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      sessionStorage.setItem(key, element)
    }
  }
  // axios.defaults.headers.common['Authorization'] = access_token;
}

export default {
  getTokenFromService,
  saveLoginInfo
}
