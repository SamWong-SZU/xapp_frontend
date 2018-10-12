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

Vue.use(Meta);
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.prototype.setState = ((store, state) => {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
})
Vue.prototype.routerPush = function (data, nav) {
    data.query = data.query || {}
    data.query.nav = nav
    this.$router.push(data)
}
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
