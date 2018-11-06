/**
 * @file lavas config
 * @author SamWong(200988743@qq.com)
 */

'use strict';

const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const isDev = process.env.NODE_ENV === 'development';
const isGitPage = false
const setPath = isGitPage ? '/xapp_frontend/dist/' : '/'
const config = {
    dev: {
        publicPath: '/',
        routeBase: '/'
    },
    prod: {
        publicPath: setPath,
        routeBase: setPath
    }
}

module.exports = {
    build: {
        ssr: false,
        path: BUILD_PATH,
        publicPath: isDev ? config['dev'].publicPath : config['prod'].publicPath,
        ssrCopy: isDev ? [] : [
            {
                src: 'server.prod.js'
            },
            {
                src: 'package.json'
            }
        ],
        /**
         * alias for webpack
         *
         * @type {Object.<string, Object>}
         */
        alias: {
            server: {
                'iscroll/build/iscroll-lite$': path.join(__dirname, 'core/iscroll-ssr.js')
            }
        },
        /**
         * node externals
         *
         * @type {Array.<string|RegExp>}
         */
        nodeExternalsWhitelist: [
            /iscroll/
        ]
    },
    router: {
        mode: 'hash',
        base: isDev ? config['dev'].routeBase : config['prod'].routeBase,
        pageTransition: {
            type: 'slide',
            transitionClass: 'slide'
        }
    },
    serviceWorker: {
        // If true, generate service-worker.js and sw-register.js
        // Default to `false`
        enable: true,

        // Path of service worker template
        swSrc: path.join(__dirname, 'core/service-worker.js'),

        // Path of generated service worker file
        swDest: path.join(BUILD_PATH, 'service-worker.js'),

        // If true, `workbox.routing.registerNavigationRoute()` won't be generated
        // Defaults to `false`
        disableGenerateNavigationRoute: false,

        // URL of appshell page
        // ONLY works in SSR mode
        appshellUrl: '/appshell'
    },
    filenames: {
        fonts: 'font/[name].[hash:8].[ext]',
        woff: 'font/[name].[hash:8].[ext]',
        woff2: 'font/[name].[hash:8].[ext]'
    }
};
