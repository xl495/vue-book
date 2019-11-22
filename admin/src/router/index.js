import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Useredit from '../views/user/edit'
import UserList from '../views/user/list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      { path: '/user_edit', component: Useredit},
      { path: '/user_list', component: UserList},
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
