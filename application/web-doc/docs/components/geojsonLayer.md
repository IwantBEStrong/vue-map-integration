# 三维球

:::demo geojsonLayer的基本使用。

```vue

<template>
  <cesium-earth>
    <div class="controller-container">
      <el-button type="primary" @click="add">上移</el-button>
      <el-button type="primary" @click="lower">下移</el-button>
      <el-button type="primary" @click="changeStyle">样式</el-button>
      <el-switch 
        v-model="show"
        active-text="显示"
        inactive-text="隐藏"
      >可见性</el-switch>    
    </div>
    <cesium-geojson-layer
      :source="topoJson"
      :show="show"
      :z-index="400"
    />
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
      :fill="color"
      :z-index="chinaIndex"
    />
  </cesium-earth>
</template>

<script setup>
import { reactive, ref } from 'vue'

const show = ref(true)

const chinaIndex=ref(101)

const color=ref('red')

const sourceWuhan=ref('https://geo.datav.aliyun.com/areas_v3/bound/420100_full.json')
const sourceHubei = ref('https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json')
const sourceChina = ref('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
const topoJson=ref({"type":"Topology","objects":{"collection":{"type":"GeometryCollection","geometries":[{"type":"Polygon","arcs":[[0]]},{"type":"Point","coordinates":[9389,9999]}]}},"arcs":[[[3239,7520],[-3239,-3384],[0,-3108],[8027,-1028],[1972,7073],[-6760,447]]],"transform":{"scale":[0.0018722575382538267,0.0017027039221294833],"translate":[95.00976562499999,17.644022027872726]},"bbox":[95.00976562499999,17.644022027872726,113.73046875,34.66935854524543]})

function add(){
  chinaIndex.value+=50
}

function lower(){
  chinaIndex.value-=50
}

function changeStyle() {
  color.value=color.value==='red'?'pink':'red'
}
</script>

<style lang="scss" scoped>
.controller-container{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
}

</style>
```

:::
