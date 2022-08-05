const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
    title: 'VitePress',
    description: 'Life is short, Keep it simple.',
    head: [
        ['script', {src: '/cesium/Cesium.js'}],
        ['link', {rel: 'stylesheet', href: '/cesium/Widgets/widgets.css'}],
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
    ],
    base: base,
    themeConfig: {
        repo: 'xinlei3166/vitepress-demo',
        logo: '/logo.svg',
        docsDir: 'docs',
        docsBranch: 'master',
        algolia: {
            appId: 'X51HWTCQJJ',
            apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
            indexName: 'vitepress-demo'
        },
        nav,
        sidebar,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: {permalink: false},

        // options for markdown-it-toc
        toc: {includeLevel: [1, 2]},

        config: (md) => {
            const {demoBlockPlugin} = require('../node/theme-demo-block/demoblock')
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'scss'
            })
        }
    }
}
