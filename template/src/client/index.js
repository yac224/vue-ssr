import Vue from 'vue'
import App from './app'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

Vue.component('Top', require('components/Top').default)

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options
    if (asyncData) {
      // assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      this.dataPromise = asyncData({
        store: this.$store,
        router: this.$router
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        router: this.$router
      }).then(next).catch(next)
    } else {
      next()
    }
  },
  beforeDestroy() {
    const { asyncData, name } = this.$options
    if (asyncData && name) {
      this.$store.unregisterModule(name)
    }
  }
})

export function createApp() {
  const store = createStore()
  const router = createRouter(store)
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
