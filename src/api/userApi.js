/* eslint-disable camelcase */
import axios from '@/plugins/axios'

let getUserInfo = function (userInfoUri) {
  const access_token = sessionStorage.getItem('access_token')
  return axios.get(userInfoUri, {
    params: {
      access_token
    }
  })
}

export default {
  getUserInfo
}
