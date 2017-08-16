<script>
  import { mapState } from 'vuex'
  import createModule from './store'
  const name = '\{{ kebabCase name }}'
  export default {
    name,
    metaInfo: {
      titleTemplate: '%s - ' + name,
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
        data: state => state[name]
      })
    }
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

