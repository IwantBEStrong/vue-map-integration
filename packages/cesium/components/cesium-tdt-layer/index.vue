<template>
    <slot />
</template>
<script lang="ts">
export default {
    name: 'CesiumTdtLayer',
};
</script>

<script setup lang="ts">
import { ImageryLayer } from 'cesium';
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';

interface Props {
    url: string;
    token: string;
    subdomains?: Array<string>;
    layer?: string;
    style?: string;
    format?: string;
    tileMatrixSetID?: string;
}
const layer = ref<ImageryLayer | undefined>(undefined);
const gwEarth: GwEarth | undefined = inject('gwEarth');
const props = withDefaults(defineProps<Props>(), {
    subdomains: () => ['0', '1', '2', '3', '4', '5', '6', '7'],
    layer: 'tdtCiaLayer',
    style: 'default',
    format: 'image/jpeg',
    tileMatrixSetID: 'GoogleMapsCompatible',
});

onMounted(() => {
    addLayer();
});

onBeforeUnmount(() => {
    if (layer.value) {
        layer.value.destroy();
        layer.value = undefined;
    }
});

function addLayer() {
    if (!gwEarth) {
        return;
    }
    layer.value = gwEarth.viewer?.imageryLayers.addImageryProvider(
        new gwEarth.Cesium.WebMapTileServiceImageryProvider({
            // 影像注记
            url: `${props.url}&tk=${props.token}`,
            subdomains: props.subdomains,
            layer: props.layer,
            style: props.style,
            format: props.format,
            tileMatrixSetID: props.tileMatrixSetID,
        }),
    );
}
</script>

<style scoped></style>
