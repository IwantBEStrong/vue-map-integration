<template>
    <slot></slot>
</template>

<script lang="ts">
export default {
    name: 'CesiumKmlLayer',
};
</script>
<script setup lang="ts">
import { Resource } from 'cesium';
import { onMounted, watch } from 'vue';
import { useFeature } from '../hooks/useFeature';

interface FeatureLayerProps {
    source: Resource | string | Document | Blob | object;
    show?: boolean;
    zIndex?: number;
    clampToGround?: boolean;
}

const props = withDefaults(defineProps<FeatureLayerProps>(), {
    source: '',
    show: true,
    zIndex: 1,
    clampToGround: true,
});

const { clear, gwEarth, initLayer } = useFeature(props);

watch([() => props.source, () => props.clampToGround], () => {
    addLayer();
});

onMounted(() => {
    addLayer();
});

function addLayer() {
    clear();
    gwEarth?.Cesium.KmlDataSource.load(props.source, {
        camera: gwEarth?.viewer?.scene.camera,
        canvas: gwEarth?.viewer?.scene.canvas,
        clampToGround: props.clampToGround,
    }).then((kmlDataSource) => {
        initLayer(kmlDataSource);
    });
}
</script>

<style scoped></style>
