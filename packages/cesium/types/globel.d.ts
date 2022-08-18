import * as Cesium from 'cesium';
import { Resource } from 'cesium';

declare global {
    interface GwEarth {
        viewer: Cesium.Viewer | null;
        Cesium: typeof Cesium;
    }
}
