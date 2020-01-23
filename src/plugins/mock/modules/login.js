import Mock from '../config'
import LogUtils from '@/assets/js/utils/logUtil'

Mock.mock(/^\/api\/signIn/, 'post', {
  token: '@word(32)',
  userInfo: {
    userName: '@word(4, 10)'
  },
  signInTime: '@date'
})

LogUtils.log('mock', '登录mock加载完毕')
