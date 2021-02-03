<template>
  <div id="app">
    <vue-scale-resize :width="1920" :height="1080">
      <div class="example">大屏展示缩放</div>
    </vue-scale-resize>
  </div>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.example {
  width: 100%;
  height: 100%;
  background: #000;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  color: #fff;
  line-height: 800px;
}
</style>
