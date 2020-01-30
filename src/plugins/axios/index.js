import AxiosPlugin from '@/plugins/axios/axiosPlugin'

import Vue from 'vue'

Vue.use(AxiosPlugin, {
  timeout: 3000,
  headers: { 'Accept': 'application/json' }
})

export default AxiosPlugin.getInstance()
