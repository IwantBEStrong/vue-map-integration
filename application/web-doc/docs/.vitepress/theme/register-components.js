import Demo from '../../node/theme-demo-block/components/Demo.vue'
import DemoBlock from '../../node/theme-demo-block/components/DemoBlock.vue'
import ElementPlus from 'element-plus'
export function registerComponents(app) {
  app.use(ElementPlus)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
