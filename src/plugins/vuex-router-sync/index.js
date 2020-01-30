import Vue from 'vue'
import store from '@/store' // vuex store instance
import router from '@/router' // vue-router instance

import VuexRouterSyncPlugin from './VuexRouterSyncPlugin'

Vue.use(VuexRouterSyncPlugin, {
  store,
  router
})
