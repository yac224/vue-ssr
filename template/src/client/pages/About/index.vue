<script>
  import { mapState } from 'vuex'
  const name = 'about'
  export default {
    name,
    metaInfo: {
      titleTemplate: '%s - ' + name
    },
    computed: {
      ...mapState({
        title: state => state.title
      })
    }
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

