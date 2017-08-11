import Vue from 'vue'
import Vuex from 'vuex'

import createTitle from './modules/Title'
Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
      title: createTitle()
    },
    actions: {
      preload: (store) => {
        return Promise.all([
          store.dispatch('title/preload')
        ])
      }
    }
  })
}
