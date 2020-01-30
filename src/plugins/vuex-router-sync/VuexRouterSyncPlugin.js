import { sync } from 'vuex-router-sync'

import LogUtils from '@/assets/js/utils/logUtil'

class VuexRouterSyncPlugin {
  install (Vue, option) {
    const { store, router } = option
    // eslint-disable-next-line no-unused-vars
    const unsync = sync(store, router)

    LogUtils.debug('system', '加载VuexRouterSyncPlugin')
  }
}

export default new VuexRouterSyncPlugin()
