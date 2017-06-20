import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      logo: null,
      list: null
    },
    actions: {
      "INIT": (context, data) => {
        // return context.dispatch('message/GET').then(context.dispatch('list/GET'))
        return context.dispatch('logo/GET').then(() => {
          return context.dispatch('list/GET')
        })
      },
      "logo/GET": (context, data) => {
        return api.getLogo().then(function(data) {
          context.commit('logo/SET', data.vue)
        }, function(err) {
          context.commit('logo/SET', '')
          console.log(err)
        })
      },
      "list/GET": (context, data) => {
        return api.getList().then(function(data) {
          context.commit('list/SET', data.list)
        }, function(err) {
          context.commit('list/SET', null)
          console.log(err)
        })
      }
    },
    mutations: {
      "logo/SET": (state, data) => {
        Vue.set(state, 'logo', data)
      },
      "list/SET": (state, data) => {
        Vue.set(state, 'list', data)
      }
    }
  })
}