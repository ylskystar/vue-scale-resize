<template>
  <div
    class="scale-box"
    :style="{transform: `scale(${scale}) translate(-50%, -50%)`,
          WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
          width:width + 'px',
          height:height + 'px'}"
  >
    <slot></slot>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
export default {
  name: "VueScaleResize",
  props: {
    width: {
      type: [String, Number],
      default: 1920,
    },
    height: {
      type: [String, Number],
      default: 1080,
    },
  },
  data() {
    return {
      scale: this.getScale(),
    };
  },
  mounted() {
    window.addEventListener("resize", this.setScale);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setScale);
  },
  methods: {
    getScale() {
      const { width = 1920, height = 1080 } = this;
      let ww = window.innerWidth / width;
      let wh = window.innerHeight / height;
      console.log(window.innerWidth);

      return ww < wh ? ww : wh;
    },
    setScale: debounce(function () {
      let scale = this.getScale();
      this.scale = scale;
      console.log("resize", this.scale);
    }, 500),
  },
};
</script>

<style>
.scale-box {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>