import { createRouter, createWebHistory } from 'vue-router'
import Vbind from '../views/VBind.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import VFor from '../views/VFor.vue'
import Props from '../views/Props.vue'
import Emit from '../views/Emit.vue'
import VShow from '../views/VShow.vue'
import RouterView from '../views/RouterView.vue'
import Model from '../views/Model.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/v-bind',
      name: 'Vbind',
      component: Vbind
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/v-for',
      name: 'VFor',
      component: VFor
    }
    ,
    {
      path: '/props',
      name: 'Props',
      component: Props
    }
    ,
    {
      path: '/emit',
      name: 'Emit',
      component: Emit
    },
    {
      path: '/v-show',
      name: 'VShow',
      component: VShow
    },
    {
      path: '/router-view',
      name: 'RouterView',
      component: RouterView
    }
    ,
    {
      path: '/model',
      name: 'Model',
      component: Model
    }
  ]
})

export default router
