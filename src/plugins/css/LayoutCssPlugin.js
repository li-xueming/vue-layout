import './common.scss'
import variables from './variables.scss'
import LogUtils from '@/assets/js/utils/logUtil'

class LayoutCssPlugin {
  install (Vue, option) {
    let { store, moduleName = 'styleVariables' } = option
    store.registerModule(moduleName, {
      namespaced: true,
      state: { ...variables },
      mutations: {
        'VALUE_CHANGED' (state, payload) {
          const { name, value } = payload
          state[name] = value
        }
      }
    })
    // Vue.mixin({
    //   data () {
    //     return {
    //       layoutVar
    //     }
    //   }
    // })
    LogUtils.debug('system', '加载LayoutCssPlugin')
  }
}

export default new LayoutCssPlugin()
