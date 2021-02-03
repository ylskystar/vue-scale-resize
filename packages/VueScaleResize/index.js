// 导入组件
import VueScaleResize from './src/VueScaleResize.vue'

// 为组件提供 install 安装方法，供按需引入
VueScaleResize.install = function (Vue) {
  Vue.component(VueScaleResize.name, VueScaleResize)
}

// 默认导出组件
export default VueScaleResize