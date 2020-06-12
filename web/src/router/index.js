import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
    children:[
      {
        path:'/',
        name:'Home',
        component: () => import(/* webpackChunkName: "Main" */ '../views/Home.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
