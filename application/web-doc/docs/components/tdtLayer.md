# 天地图

:::demo 天地图矢量与影像。

```vue
<template>
  <cesium-earth>
    <cesium-tdt-layer
      url="http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}"
      token="68f8e56a57bff9c5b05d1da67ffacbf5"
      :style="`default`"
      format="tiles"
    />
    <cesium-tdt-layer
      url="http://t{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}"
      token="68f8e56a57bff9c5b05d1da67ffacbf5"
      :style="`default`"
      format="tiles"
    />
  </cesium-earth>
</template>

<style scoped>
</style>
```

:::
