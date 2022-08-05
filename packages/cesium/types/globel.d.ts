import * as Cesium from 'cesium';

declare global {
    interface GwEarth {
        viewer: Cesium.Viewer | null;
        Cesium: typeof Cesium;
    }
}