<template>
  <div v-if="isHidden">
    <component :is="componentId" :index="menuItem.path">
      <div v-if="hasChildren">
        <menu-item v-for="menu in menuItem.children" :key="menu.id"></menu-item>
      </div>
      <div v-else>
        <i :class="menuItem.meta.icon"></i>
        <span slot="title">{{menuItem.meta.title}}</span>
      </div>
    </component>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    route: {
      type: Object,
      require: true
    }
  },
  computed: {
    componentId () {
      const { menuType = '1000' } = this.menuItem
      if (menuType === '1200') {
        return 'ElMenuGroup'
      } else if (this.hasChildren) {
        return 'ElSubMenu'
      } else {
        return 'ElMenuItem'
      }
    },
    isHidden () {
      const { isHidden = false } = this.menuItem
      return isHidden
    },
    hasChildren () {
      const { children = [] } = this.menuItem
      return Array.isArray(children) && children.length > 0
    }
  },
  watch: {
    route (val) {
      this.menuItem = val
    }
  },
  data () {
    return {
      menuItem: {}
    }
  },
  components: {
    MenuItem: () => import('@/layout/menu/MenuItem')
  }
}
</script>

<style lang="scss" scoped></style>
