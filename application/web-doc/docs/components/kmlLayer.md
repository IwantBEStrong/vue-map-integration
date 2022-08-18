# 三维球

:::demo geojsonLayer的基本使用。

```vue

<template>
  <cesium-earth>
    <div class="controller-container">
      <el-switch 
        v-model="show"
        active-text="显示"
        inactive-text="隐藏"
      >可见性</el-switch>    
    </div>
    <cesium-kml-layer source="/fileAssets/gdpPerCapita2008.kmz" :show="show"/>
  </cesium-earth>
</template>

<script setup>
import { reactive, ref } from 'vue'

const show = ref(true)
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
