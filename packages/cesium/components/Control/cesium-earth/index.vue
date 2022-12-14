<template>
    <div id="map">
        <slot v-if="gwEarth.viewer" />
    </div>
</template>

<script lang="ts">
export default {
    name: 'CesiumEarth',
};
</script>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, provide, shallowReactive } from 'vue';
import * as Cesium from 'cesium';
import { layersChange } from './layersChange';

const gwEarth = shallowReactive<GwEarth>({
    viewer: null,
    Cesium,
});
provide('gwEarth', gwEarth);

onMounted(() => {
    initMap();
    layersChange(gwEarth);
});

onBeforeUnmount(() => {
    if (gwEarth.viewer !== null) {
        gwEarth.viewer.destroy();
        gwEarth.viewer = null;
    }
});

const initMap = () => {
    gwEarth.Cesium.Ion.defaultAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzOTQ1MmIyNy1jOTIyLTQxMTctYmI5Ny1mYzQwOGIxZmEzOTgiLCJpZCI6NDAzNjksImlhdCI6MTYwODY5MzcyNH0.l2D5PoZuU-YbrOQFpiq4CcWGmkjiw_BXzn6NO9iqAF0';
    gwEarth.viewer = new gwEarth.Cesium.Viewer('map', {
        animation: false, // 是否创建动画小器件，左下角仪表
        baseLayerPicker: false, // 是否显示图层选择器
        fullscreenButton: false, // 是否显示全屏按钮
        geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
        homeButton: false, // 是否显示Home按钮
        infoBox: false, // 是否显示信息框
        sceneModePicker: false, // 是否显示3D/2D选择器
        selectionIndicator: false, // 是否显示选取指示器组件
        timeline: false, // 是否显示时间轴
        navigationHelpButton: false, // 是否显示右上角的帮助按钮
        scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        selectedImageryProviderViewModel: undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义
        selectedTerrainProviderViewModel: undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义
        terrainProvider: undefined, // 地形图层提供者，仅baseLayerPicker设为false有意义
        fullscreenElement: document.body, // 全屏时渲染的HTML元素,
        useDefaultRenderLoop: true, // 如果需要控制渲染循环，则设为true
        targetFrameRate: undefined, // 使用默认render loop时的帧率
        showRenderLoopErrors: false, // 如果设为true，将在一个HTML面板中显示错误信息
        automaticallyTrackDataSourceClocks: true, // 自动追踪最近添加的数据源的时钟设置
        sceneMode: gwEarth.Cesium.SceneMode.SCENE3D, // 初始场景模式
        mapProjection: new gwEarth.Cesium.WebMercatorProjection(), // 默认地图投影为web 墨卡托
        contextOptions: {
            // 传递给Scene对象的上下文参数（scene.options）
            webgl: {
                alpha: true,
            },
        },
    });
    //去除版权信息
    (gwEarth.viewer.cesiumWidget.creditContainer as HTMLElement).style.display =
        'none';
    // //右键调整角度
    gwEarth.viewer.scene.screenSpaceCameraController.zoomEventTypes = [
        gwEarth.Cesium.CameraEventType.WHEEL,
        gwEarth.Cesium.CameraEventType.PINCH,
    ];
    // //滚轮放大缩小
    gwEarth.viewer.scene.screenSpaceCameraController.tiltEventTypes = [
        gwEarth.Cesium.CameraEventType.PINCH,
        gwEarth.Cesium.CameraEventType.RIGHT_DRAG,
    ];
    // //默认关闭hdr
    gwEarth.viewer.scene.highDynamicRange = false;
    gwEarth.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 10;
    gwEarth.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 24000000;
};
</script>

<style lang="scss" scoped>
#map {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>
