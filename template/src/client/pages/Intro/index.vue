<script>
  import { mapState } from 'vuex'
  import createModule from './store'
  import List from 'components/List'
  const name = 'intro'
  export default {
    name,
    metaInfo: {
      titleTemplate: '%s - ' + name
    },
    asyncData({ store, route }) {
      let state = store.state[name]
      if (!store._modulesNamespaceMap[name + '/']) {
        store.registerModule(name, createModule())
      }
      // commit ssr state or preload data
      if (state) {
        store.commit(name + '/init', state)
        return Promise.resolve()
      } else {
        return store.dispatch(name + '/preload')
      }
    },
    computed: {
      ...mapState({
        title: state => state.title,
        data: state => state[name]
      })
    },
    components: {
      List
    }
  }
</script>

<template src="./template.html"></template>

