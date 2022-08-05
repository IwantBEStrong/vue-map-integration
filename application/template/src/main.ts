import { createApp } from 'vue';
import Map3D from '@vue-map-integration/cesium';
import 'element-plus/dist/index.css';
import App from './App.vue';
import store from './store';
import './style.css';

const app = createApp(App);
app.use(store);
app.use(Map3D);
app.mount('#app');
