<template>
  <el-container class="layout-container">
    <el-aside class="transition" :width="sidebarCommonWidth">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/layout/sidebar'
import { mapState } from 'vuex'
export default {
  name: 'LayoutContainer',
  components: {
    Sidebar
  },
  computed: {
    ...mapState({
      sidebarCommonWidth: state => state.styleVariables['sidebar-common-width']
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout-container {
    height: 100%;
    width: 100%;
  }
  .transition {
    transition: $--all-transition;
  }
  .aside {
    width: 200px;
  }
</style>
