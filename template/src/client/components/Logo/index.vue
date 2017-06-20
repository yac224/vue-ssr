<template>
  <div class="logo">
    <div class="left">
      <img src="/images/logo.png">
    </div>
    <div class="right">
      <h1 v-html="logo.title"></h1>
      <p>
        <a v-for="item in logo.link" class="button" :class="{white:item.type}" :href="item.href" :target="item.target">\{{ item.content }}</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .logo {
    padding: 50px 40px;
  }
  
  .left {
    width: 39%;
    display: inline-block;
    vertical-align: top;
    >img {
      width: 215px;
      height: 215px;
      float: right;
      margin-right: 60px;
    }
  }
  
  .right {
    width: 61%;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    >h1 {
      font-weight: 300;
      margin: 0;
      font-size: 3.2em;
    }
  }
  
  .button {
    margin: 1em 0.5em;
    font-size: 1.05em;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    text-decoration: none;
  }
  
  .button.white {
    background-color: #fff;
    color: #42b983;
  }
</style>

<script>
  export default {
    name: 'logo',
    props: ['logo'],
  }
</script>