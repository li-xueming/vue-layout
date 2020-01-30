import LogUtils from '@/assets/js/utils/logUtil'
import Vue from 'vue'

import AuthGithubPlugin from './github'
Vue.use(AuthGithubPlugin)
LogUtils.debug('system', 'oauth插件加载完成')
