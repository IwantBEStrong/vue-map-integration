<template>
    <slot />
</template>

<script lang="ts">
export default {
    name: 'CesiumGeojsonLayer',
};
</script>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { Color, Resource } from 'cesium';
import { useFeature } from '../hooks/useFeature';
interface FeatureLayerProps {
    source: Resource | string | Document | Blob | object;
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

const { clear, gwEarth, initLayer } = useFeature(props);

watch(
    [
        () => props.source,
        () => props.fill,
        () => props.strokeWidth,
        () => props.stroke,
        () => props.clampToGround,
        () => props.circleRadius,
        () => props.circleFill,
        () => props.circleOutLineColor,
        () => props.circleOutLineWidth,
    ],
    () => {
        addLayer();
    },
);

onMounted(() => {
    addLayer();
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
        initLayer(dataSources);
    });
}
</script>

<style scoped></style>
