import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Meta)

export function createRouter(store) {
  return new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 }),
    routes: [{
      path: '/',
      component: () => require.ensure([], () => require('pages/Intro').default)
    }, {
      path: '/about',
      component: require('pages/About').default
    }, {
      path: '*',
      redirect: '/'
    }]
  })
}
