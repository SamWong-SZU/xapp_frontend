/**
 * @file server.prod.js
 * @author lavas
 */

var LavasCore = require('lavas-core-vue');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var core = new LavasCore(__dirname);
var proxyTable = {
    // proxy table example
    '/api': {
        target: 'https://xapp.zone/',
        changeOrigin: true
    }
    //http://erp2.hwtest.pagoda.com.cn/erp_sale/SalConsignOutDetailService/findGoodsOutDetail
};

process.env.NODE_ENV = 'production';

core.init(process.env.NODE_ENV)
    .then(function () {
        core.runAfterBuild()
    })
    .then(function () {
        Object.keys(proxyTable).forEach(function (pattern) {
            app.use(pattern, proxy(proxyTable[pattern]));
        });
        app.use(core.expressMiddleware());
        app.listen(port, function () {
            console.log('server started at localhost:' + port);
        });
    }).catch(function (err) {
        console.log(err);
    });

// catch promise error
process.on('unhandledRejection', function (err, promise) {
    console.log('in unhandledRejection');
    console.log(err);
    // cannot redirect without ctx!
});

