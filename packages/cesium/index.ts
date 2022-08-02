import { App, Component } from 'vue';
type componentObj = {
    [key: string]: Component;
};
import * as Map3D from './components';
export { GwEarth } from './components';

export default {
    install: (app: App<Element>) => {
        const keys = Object.keys(Map3D);
        keys.forEach((key) => {
            app.component(key, (Map3D as componentObj)[key]);
        });
    },
};
