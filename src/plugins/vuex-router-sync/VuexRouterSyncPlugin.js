import { sync } from 'vuex-router-sync'
class VuexRouterSyncPlugin {
  install (Vue, option) {
    const { store, router } = option
    // eslint-disable-next-line no-unused-vars
    const unsync = sync(store, router)
  }
}

export default new VuexRouterSyncPlugin()
