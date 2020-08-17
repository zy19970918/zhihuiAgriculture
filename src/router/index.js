import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import about from '../views/About.vue';
import login from '../page/login.vue'
import count from '../views/count.vue';
import agricultreu from '../components/Agriculture.vue'
import Forestry from '../components/Forestry.vue'
import Animal from '../components/Animal.vue'
import Fisheries from '../components/Fisheries.vue'
import details from '../page/details.vue';
import changePassword from '../components/changePassword.vue'
import information from '../components/information.vue'
import management from '../page/management.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    redirect: '/index/agricultreu',
    children: [{
        path: 'agricultreu',
        name: 'agricultreu',
        component: agricultreu,
        children:[
          {
            path:'/index/agricultreu/information',
            name:'information',
            component:information
          },
          {
            path:'/index/agricultreu/changePassword',
            name:'changePassword',
            component:changePassword
          }
        ]
      },
      {
        path: '/index/agricultreu/details',
        name: 'details',
        component: details
      },
      {
        path:'/index/management',
        name:'management',
        component:management
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
