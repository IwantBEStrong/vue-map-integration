import * as Cesium from 'cesium';
import { DataSource } from 'cesium';

export function useOrderByZIndex(gwEarth?: GwEarth) {
    function orderLayer(dataSourceCollection?: Cesium.DataSourceCollection) {
        const arr = dataSourceCollection?._dataSources || [];
        /**
         * 由于DataSourceCollection里面是图层时一个promise，这里等所有promise，加载完在进行比较
         */
        Promise.all(arr).then((dataSources: Array<DataSource>) => {
            bubbleSort(dataSources);
        });
    }

    /**
     * 通过比较zIndex，对图层进行下移
     * @param dataSources
     */
    function bubbleSort(dataSources: Array<DataSource>) {
        /**
         * TODO：该方法暂时保留，以免sort方式发生故障
         */
        // const len = dataSources.length;
        // if (len >= 1) {
        //     for (let i = 0; i < len - 1; i++) {
        //         for (let j = 0; j < len - 1 - i; j++) {
        //             if (
        //                 (dataSources[j].zIndex || 1) >
        //                 (dataSources[j + 1].zIndex || 1)
        //             ) {
        //                 gwEarth?.viewer?.dataSources.raise(dataSources[j]);
        //                 const temp = dataSources[j + 1];
        //                 dataSources[j + 1] = dataSources[j];
        //                 dataSources[j] = temp;
        //             }
        //         }
        //     }
        // }
        dataSources.sort((a, b) => {
            const i = (a?.zIndex || 1) - (b?.zIndex || 1);
            if (i < 0) {
                gwEarth?.viewer?.dataSources.raise(b);
            }
            return i;
        });
        return dataSources;
    }

    return {
        orderLayer,
    };
}
