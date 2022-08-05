import theme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import { registerComponents } from './register-components'
import './styles/index.css'
// import './styles/demo-block-style/index.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
  }
}
