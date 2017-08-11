import request from 'superagent'

const domain = process.env.SERVER ? '' : 'http://localhost:8080'

function getInitState() {
  return {
    list: []
  }
}

export default function() {
  return {
    namespaced: true,
    state: getInitState(),
    actions: {
      preload: (store) => {
        return request.get(domain + '/api/list').then(function(response) {
          let res = response ? JSON.parse(response.text) : null
          let payload
          if (res.status !== 200 || res.message !== null) {
            payload = null
          } else {
            payload = res.data
          }
          store.commit('init', payload)
        }, function() {
          store.commit('init')
        })
      }
    },
    mutations: {
      init: (state, payload) => {
        if (!payload) payload = getInitState()
        Object.assign(state, payload)
      }
    }
  }
}
