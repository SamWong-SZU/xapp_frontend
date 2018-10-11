/**
 * @file appShell/appNav module
 * @author lavas
 */

export const SET_APP_NAV = 'SET_APP_NAV';

export const state = () => {
    return {
        bottomNav: 'home',
        tabCache: {},
        tabDefault: {
            home: '/',
            rank: '/detail/2',
            type: '/detail/3',
            about: '/detail/4'
        }
    };
};

export const mutations = {
    [SET_APP_NAV] (state, appNav) {
        state.bottomNav = appNav.bottomNav
        state.tabCache = Object.assign(state.tabCache, appNav.tabCache)
    }
};

export const actions = {

    /**
     *
     * @param {Function} commit commit
     * @param {Object} appNav appNav
     */
    setAppNav ({ commit }, appNav) {
        commit(SET_APP_NAV, appNav);
    }
};
