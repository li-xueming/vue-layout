export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    signIn (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    signIn ({ commit }, data) {
      sessionStorage.setItem('userInfo', data)
      commit('signIn', data)
    }
  },
  getters: {
    token: state => {
      return state.userInfo.token || sessionStorage.getItem('token')
    }
  }
}
