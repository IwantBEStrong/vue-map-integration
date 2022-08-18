module.exports = {
    '/components/': getComponentsSidebar(),
    '/guide/': getGuideSidebar(),
};

function getComponentsSidebar() {
    return [
        {
            text: '球',
            items: [
                {
                    text: 'cesium-earth',
                    link: '/components/earth',
                },
            ],
        },
        {
            text: '图层',
            items: [
                {
                    text: 'cesium-tdt-layer',
                    link: '/components/tdtLayer',
                },
            ],
        },
        {
            text: '要素图层',
            items: [
                {
                    text: 'cesium-geojson-layer',
                    link: '/components/geojsonLayer',
                },
                {
                    text: 'cesium-kml-layer',
                    link: '/components/kmlLayer',
                },
            ],
        },
    ];
}

function getGuideSidebar() {
    return [
        // {
        //   text: '指南',
        //   items: [
        //     {
        //       text: '文档1',
        //       link: '/guide/button'
        //     },
        //     {
        //       text: '文档2',
        //       link: '/guide/modal'
        //     }
        //   ]
        // },
        // {
        //   text: '教程',
        //   items: [
        //     {
        //       text: '教程1',
        //       link: '/guide/button'
        //     },
        //     {
        //       text: '教程2',
        //       link: '/guide/modal'
        //     }
        //   ]
        // }
    ];
}
