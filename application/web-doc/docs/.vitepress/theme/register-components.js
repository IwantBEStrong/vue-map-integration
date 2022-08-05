import Demo from '../../node/theme-demo-block/components/Demo.vue'
import DemoBlock from '../../node/theme-demo-block/components/DemoBlock.vue'
import ElementPlus from 'element-plus'
import Map3D from "@vue-map-integration/cesium"
export function registerComponents(app) {
  app.use(ElementPlus)
  app.use(Map3D)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
