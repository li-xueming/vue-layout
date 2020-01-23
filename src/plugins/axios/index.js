import AxiosPlugin from '@/plugins/axios/axiosPlugin'

import Vue from 'vue'

import LogUtils from '@/assets/js/utils/logUtil'

Vue.use(AxiosPlugin, {
  timeout: 500
})

LogUtils.debug('system', '加载axios插件')
