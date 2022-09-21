import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutChina from '../views/AboutChina.vue'
import CExisConfirmed from '../views/CExisConfirmed.vue'
import CNewConfirmed from '../views/CNewConfirmed.vue'
import WCuredConfirmed from '../views/WCuredConfirmed.vue'
import WExisConfirmed from '../views/WExistConfirmed.vue'
import CityShow from '../views/CityShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'china',
    component: AboutChina,
    //
    children: [
      {
        path: 'cExisConfirmed',
        name: 'cExisConfirmed',
        component: CExisConfirmed,

      },
      {
        path: 'cNewConfirmed',
        name: 'cNewConfirmed',
        component: CNewConfirmed
      },

    ],
    redirect: '/cExisConfirmed',
  }, {
    path: '/cityShow/:city',
    name: 'cityShow',
    component: CityShow,
    props: true
  },
  {
    path: '/aboutWorld',
    // name: 'world',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutWorld.vue'),

    children: [
      {
        path: 'wCuredConfirmed',
        name: 'wCuredConfirmed',
        component: WCuredConfirmed
      },
      {
        path: 'wExisConfirmed',
        name: 'wExisConfirmed',
        component: WExisConfirmed
      }
    ],
    redirect: '/aboutWorld/wCuredConfirmed',

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
