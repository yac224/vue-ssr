<template>
  <div class="list">
    <div v-for="item in list" class="point">
      <h2>\{{ item.title }}</h2>
      <p v-html="item.description"></p>
    </div>
  
  </div>
</template>

<style lang="scss">
  .list {
    background-color: #fff;
    padding-bottom: 70px;
  }
  
  .point {
    width: 33%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;
  
    >h2 {
      color: #42b983;
      font-size: 1.5em;
      font-weight: 400;
      margin: 0;
      padding: 0.5em 0;
    }
    >p {
      color: #7f8c8d;
      word-spacing: 0.05em;
    }
  }
</style>

<script>
  export default {
    name: 'list',
    props: ['list']
  }
</script>
