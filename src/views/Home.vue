<template>
  <div class="home">
    <el-scrollbar style="height: 100vh;"  :native="false" :noresize="true">
       <p v-for="(item, index) in 200" :key="index">{{index}} 这里是一些文本。</p>
    </el-scrollbar>
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      scrollbar: {
        /**
         * 是否显示原生滚动条
         */
        native: false,
        /**
         * 外部盒子样式
         */
        wrapStyle: {
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        },
        /**
         * 外部盒子类
         */
        // wrapClass: {
        //   'sidebar_warp': true
        // },
        /**
         * 内部视图样式
         */
        // viewClass: {
        //   'sidebar_view': true
        // },
        /**
         * 内部视图类
         */
        viewStyle: {},
        /**
         * 是否不改变大小
         * 如果 container 尺寸不会发生变化，最好设置它可以优化性能
         */
        noresize: false,
        /**
         * 生成的标签类型，默认使用 `div`标签包裹
         */
        tag: 'div'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .scrollbar {
    height: 300px;
  }
  /deep/.sidebar_warp {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .sidebar_view {
      min-height: 100%;
    }
  }
</style>
