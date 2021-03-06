/**
 * @file entry
 * @author SamWong(200988743@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta';

import { createRouter } from '@/.lavas/router';
import { createStore } from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';
import ajaxService from '@/service/ajax.service.js'
Vue.use(Meta);
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.prototype.AjaxService = ajaxService
Vue.prototype.setState = ((store, state) => {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
})
export function createApp () {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return { App, router, store };
}

if (module.hot) {
    module.hot.accept();
}
