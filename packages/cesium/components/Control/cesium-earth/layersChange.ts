import { onMounted } from 'vue';

export function layersChange(gwEarth: GwEarth): void {
    onMounted(() => {
        debugger;
        const evt = new gwEarth.Cesium.Event();
        evt.addEventListener((e) => {
            console.log(e);
        }, gwEarth.viewer?.dataSources.dataSourceAdded);
    });
}
