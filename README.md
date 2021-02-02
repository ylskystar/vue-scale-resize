# vue-scale-resize
做大屏的数据可视化项目的时候，用此组件包裹可实现F11全屏时，同比例缩放
## 安装
```
npm i vue-scale-resize
or
yarn add vue-scale-resize
```

## 使用方式

### 在 main.js 引入并注册
```
import VueScaleResize from 'vue-scale-resize'
Vue.use(VueScaleResize)

```
### 在组件中使用
```
<template>
  <vue-scale-resize :width="1920" :height="1080">
    <div class="example">大屏展示缩放</div>
  </vue-scale-resize>
</template>

<script>

export default {
  name: "App",
};
</script>
```

### props
```
width: 设计的页面宽度，默认1920
height: 设计的页面高度，默认1080
width和height表示设计稿的宽高尺寸，设定好后，就能保持这个比例展示你的内容，实现跟网易有数的数据可视化项目差不多的效果
```

