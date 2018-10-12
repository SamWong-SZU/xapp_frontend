/**
 * @file pageTransition module
 * @author lavas
 */

export const state = () => {
    return {
        enable: false,
        type: 'none',
        effect: 'fade-transition'
    };
};

export const mutations = {
    setType (state, type) {
        state.type = type;
    },
    setEffect (state, effect) {
        state.effect = effect;
    }
};
