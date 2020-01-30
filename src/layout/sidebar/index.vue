<template>
  <el-scrollbar
    class="layout-sidebar"
    :view-class="scrollbar.viewClass"
    :wrapStyle="scrollbar.wrapStyle"
    :native="false"
  >
    <div @click="toggle" class="top-area">
      <i :class="collapseIconClass"></i>
    </div>
    <el-menu default-active="2" class="layout__menu" :collapse="isCollapse" router>
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
      return !this.isCollapse ? 'el-icon-s-unfold is-reverse menu__expand_icon' : 'el-icon-s-unfold is-expand menu__expand_icon'
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
    .top-area {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 56px;
      padding: 0 20px;
      .menu__expand_icon {
        transition: $--all-transition;
        transform: rotate(0deg);
      }
      .is-reverse {
        transform: rotate(180deg);
      }
    }
    .layout__menu {
      height: calc(100vh - 56px);
    }
    .el-menu--collapse {
      width: calc(100% - 1px);
      transition: $--all-transition;
    }
    .layout__menu:not(.el-menu--collapse) {
      width: calc(200px - 1px);
    }
  }
}
</style>
