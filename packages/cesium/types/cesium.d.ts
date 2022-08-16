declare module 'cesium' {
    export interface DataSource {
        zIndex?: number;
    }
    export interface DataSourceCollection {
        _dataSources: Array<Promise<DataSource>>;
    }
}
