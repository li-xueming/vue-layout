import Vue from 'vue'
import store from '@/store' // vuex store instance
import router from '@/router' // vue-router instance

import LogUtils from '@/assets/js/utils/logUtil'

import VuexRouterSyncPlugin from './VuexRouterSyncPlugin'

Vue.use(VuexRouterSyncPlugin, {
  store,
  router
})

LogUtils.debug('system', '加载VuexRouterSyncPlugin')
