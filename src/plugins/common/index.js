import Vue from 'vue'
import layoutStylePlugin from './layoutStylePlugin'
import store from '@/store'

import LogUtils from '@/assets/js/utils/logUtil'

Vue.use(layoutStylePlugin, { store })

LogUtils.debug('system', '加载layoutStylePlugin')
