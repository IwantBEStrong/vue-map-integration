import { onBeforeUnmount } from 'vue';
import { useOrderByZIndex } from '../../../hooks/useOrderByZIndex';

export function layersChange(gwEarth: GwEarth): void {
    const { orderLayer } = useOrderByZIndex(gwEarth);
    gwEarth.viewer?.dataSources.dataSourceAdded.addEventListener(orderLayer);
    gwEarth.viewer?.dataSources.dataSourceRemoved.addEventListener(orderLayer);

    onBeforeUnmount(() => {
        gwEarth.viewer?.dataSources.dataSourceAdded.removeEventListener(
            orderLayer,
        );
        gwEarth.viewer?.dataSources.dataSourceRemoved.removeEventListener(
            orderLayer,
        );
    });
}
