import { inject, onBeforeUnmount, shallowRef, watch } from 'vue';
import { DataSource } from 'cesium';
import { useOrderByZIndex } from '../../../hooks/useOrderByZIndex';

export function useFeature(props: CommonLayerProps) {
    const gwEarth = inject<GwEarth>('gwEarth');
    const layer = shallowRef<DataSource | undefined>(undefined);

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
                layer.value.show = !!show;
            }
        },
    );

    onBeforeUnmount(() => {
        clear();
    });

    /**
     * 初始化图层数据
     * @param dataSource
     */
    function initLayer(dataSource: DataSource) {
        gwEarth?.viewer?.dataSources.add(dataSource).then((data) => {
            layer.value = data;
            layer.value.zIndex = props.zIndex;
            layer.value.show = !!props.show;
        });
    }

    /**
     * 清除图层
     */
    function clear() {
        if (layer.value) {
            gwEarth?.viewer?.dataSources.remove(layer.value, true);
            layer.value = undefined;
        }
    }

    return {
        initLayer,
        gwEarth,
        layer,
        clear,
    };
}
