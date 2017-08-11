function getInitState() {
  return {}
}

export default function() {
  return {
    namespaced: true,
    state: getInitState(),
    actions: {
      preload: (store) => {
        store.commit('init')
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
