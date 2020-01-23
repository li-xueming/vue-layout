<template>
  <el-scrollbar
    class="layout-sidebar"
    :view-class="scrollbar.viewClass"
    :wrapStyle="scrollbar.wrapStyle"
    :native="false"
  >
    <el-menu default-active="2" class="layout__menu" :collapse="isCollapse">
      <el-menu-item @click="toggle">
        <!-- <i :class="collapseIconClass"></i> -->
        <i class="el-icon-s-unfold"></i>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-7">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-8">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-9">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'LayoutSidebar',
  data () {
    return {
      scrollbar: {
        native: false,
        wrapStyle: 'overflow-x: hidden !important;',
        wrapClass: ['sidebar_wrap'],
        viewClass: ['sidebar_view'],
        viewStyle: {},
        noresize: true,
        tag: 'section'
      },
      isCollapse: false
    }
  },
  methods: {
    toggle () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('styleVariables/VALUE_CHANGED', {
        name: 'sidebar-common-width',
        value: this.isCollapse ? '64px' : '200px'
      })
    }
  },
  computed: {
    collapseIconClass () {
      return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-sidebar {
    height: 100vh;
    .sidebar_view {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      .layout__menu {
        height: 100vh;
      }
      .el-menu--collapse {
        width: calc(100% - 1px);
      }
      .layout__menu:not(.el-menu--collapse) {
        width: calc(100% - 1px);
      }
    }
  }
</style>
