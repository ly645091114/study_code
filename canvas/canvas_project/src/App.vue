<template>
  <div id="app">
    <c-header/>
    <div class="c-wrapper">
      <c-menu/>
      <div class="c-canvas__box">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import "./styles/core/var";
  * {
    box-sizing: border-box !important;
  }
  html,
  body {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    cursor: default;
    color: $col-light-black;
    font: #{$font-size-base}/#{$line-height} #{$font-family};
    margin: 0;
  }
  img {
    border: none;
  }
  .c-wrapper {
    padding: 60px 30px 0 30px;
    position: relative;
  }
</style>
