import { defineConfig } from 'vite'
import vitePluginCesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginCesium()]
})
