module.exports = {
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar()
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'cesium-earth',
          link: '/components/earth'
        },
        {
          text: 'cesium-tdt-layer',
          link: '/components/tdtLayer'
        },
        {
          text: 'cesium-geojson-layer',
          link: '/components/geojsonLayer'
        }
      ]
    }
  ]
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
  ]
}

