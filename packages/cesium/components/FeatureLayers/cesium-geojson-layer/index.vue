<template>
    <slot />
</template>

<script lang="ts">
export default {
    name: 'CesiumGeojsonLayer',
};
</script>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, shallowRef, watch } from 'vue';
import { Color, DataSource, Resource } from 'cesium';
import { useOrderByZIndex } from '../../../hooks/useOrderByZIndex';
interface FeatureLayerProps {
    source: Resource | string | object;
    show?: boolean;
    zIndex?: number;
    fill?: string;
    strokeWidth?: number;
    stroke?: string;
    clampToGround?: boolean;
    circleRadius?: number;
    circleFill?: string;
    circleOutLineColor?: string;
    circleOutLineWidth?: number;
}

const gwEarth = inject<GwEarth>('gwEarth');
const layer = shallowRef<DataSource | undefined>(undefined);
const props = withDefaults(defineProps<FeatureLayerProps>(), {
    source: '',
    show: true,
    zIndex: 1,
    fill: '#409eff',
    strokeWidth: 2,
    stroke: '#409eff',
    clampToGround: true,
    circleRadius: 6,
    circleFill: '#409eff',
    circleOutLineColor: 'white',
    circleOutLineWidth: 3,
});

const { orderLayer } = useOrderByZIndex(gwEarth);

watch(
    () => props.zIndex,
    (zIndex) => {
        if (layer.value) {
            layer.value.zIndex = zIndex;
            orderLayer(gwEarth?.viewer?.dataSources);
        }
    },
);

watch(
    () => props.show,
    (show) => {
        if (layer.value) {
            layer.value.show = show;
        }
    },
);

onMounted(() => {
    addLayer();
});

onBeforeUnmount(() => {
    clear();
});

function addLayer() {
    clear();
    gwEarth?.Cesium.GeoJsonDataSource.load(props.source, {
        fill: Color.fromCssColorString(props.fill),
        stroke: Color.fromCssColorString(props.stroke),
        strokeWidth: props.strokeWidth,
        clampToGround: props.clampToGround,
    }).then((dataSources) => {
        dataSources.entities.values.forEach((entity) => {
            debugger;
            if (entity.billboard) {
                entity.billboard = undefined;
                entity.point = new gwEarth.Cesium.PointGraphics({
                    pixelSize: props.circleRadius,
                    color: Color.fromCssColorString(props.circleFill),
                    outlineWidth: props.circleOutLineWidth,
                    outlineColor: Color.fromCssColorString(
                        props.circleOutLineColor,
                    ),
                });
            }
        });
        gwEarth?.viewer?.dataSources.add(dataSources).then((data) => {
            layer.value = data;
            layer.value.zIndex = props.zIndex;
            layer.value.show = props.show;
        });
    });
}

function clear() {
    if (layer.value) {
        gwEarth?.viewer?.dataSources.remove(layer.value, true);
        layer.value = undefined;
    }
}
</script>

<style scoped></style>
