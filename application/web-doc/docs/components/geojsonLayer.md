# 三维球

:::demo geojsonLayer的基本使用。

```vue

<template>
  <cesium-earth>
    <el-switch v-model="show">可见性</el-switch>
    <el-button type="primary" @click="add">上移</el-button>
    <cesium-geojson-layer
      :source="sourceWuhan"
      :show="show"
      :z-index="300"
      fill="yellow"
    />
    <cesium-geojson-layer 
      :source="sourceHubei" 
      :show="show" 
      :z-index="200"
    />
    <cesium-geojson-layer 
      :source="sourceChina" 
      :show="show" 
      fill="red"
      :z-index="chinaIndex"
    />
  </cesium-earth>
</template>

<script setup>
import { reactive, ref } from 'vue'

const show = ref(true)

const chinaIndex=ref(101)

const circle = reactive(
  {
    markerSymbol:''
  }
)

const sourceWuhan=ref('https://geo.datav.aliyun.com/areas_v3/bound/420100_full.json')
const sourceHubei = ref('https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json')
const sourceChina = ref('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')

function add(){
  chinaIndex.value+=50
}
</script>

<style scoped>
.el-switch {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
}
.el-button {
  position: absolute;
  top: 10px;
  left: 80px;
  z-index: 100;
}
</style>
```

:::
