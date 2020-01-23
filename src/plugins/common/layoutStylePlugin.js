import './common.scss'
import variables from './variables.scss'

class LayoutStyle {
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
  }
}

export default new LayoutStyle()
