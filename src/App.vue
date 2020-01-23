<template>
  <div id="app">
    <!-- 全屏路由 -->
    <router-view name="full" v-if="ifFullScrean"></router-view>
    <!-- 框架组件 -->
    <layout v-else></layout>
  </div>
</template>

<script>

import Layout from '@/layout'

// import { fullRoutes } from '@/router'

export default {
  name: 'app',
  components: {
    Layout
  },
  watch: {
  },
  methods: {
  },
  computed: {
    ifFullScrean () {
      return this.$route.matched.some(route => {
        return !!route.components['full']
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }
</style>
