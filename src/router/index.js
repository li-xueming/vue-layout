import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/login'
  }
]

const fullRoutes = [
  {
    path: '/login',
    name: 'login',
    components: {
      full: () => import(/* webpackChunkName: "login" */ '@/views/login')
    }
  }
]

// eslint-disable-next-line no-unused-vars
const asyncRoutes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'asdfasdf'
    }
  }
]

routes = routes.concat(fullRoutes).concat(asyncRoutes)

const router = new VueRouter({
  routes
})

export default router

export {
  fullRoutes
}
