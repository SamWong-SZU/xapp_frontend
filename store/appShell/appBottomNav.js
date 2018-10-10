/**
 * @file appShell/appBottomNav module
 * @author lavas
 */

export const SET_BOTTOM_NAV = 'SET_BOTTOM_NAV';

export const state = () => {
    return {
        bottomNav: 'home',
        actions: []
    };
};

export const mutations = {
    [SET_BOTTOM_NAV] (state, bottomNav) {
        console.log(bottomNav)
        state.bottomNav = bottomNav;
    }
};

export const actions = {
    setBottomNav({commit,bottomNav}) {
        commit(SET_BOTTOM_NAV, bottomNav);
    }
};
