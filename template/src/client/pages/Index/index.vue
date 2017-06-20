<template>
  <div>
    <logo :logo="logo" v-if="logo"></logo>
    <list :list="list" v-if="list"></list>
  </div>
</template>

<style lang="scss" scoped>
  div {
    width: 900px;
    margin: 0 auto;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import Logo from 'components/Logo'
  import List from 'components/List'
  export default {
    name: 'index',
    asyncData({ store, router }) {
      return store.dispatch('INIT')
    },
    computed: {
      ...mapState({
        logo: state => state.logo,
        list: state => state.list,
      })
    },
    components: {
      Logo,
      List
    }
  }
</script>

