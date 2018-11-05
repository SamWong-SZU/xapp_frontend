
export const state = () => {
    return {
        TYPE_MAP: {
            game: '游戏',
            tool: '工具',
            lifestyle: '生活',
            food: '美食'
        }
    };
};

export const getters = {
    getTypeCN: state => type => {
        return state.TYPE_MAP[type]
    }
};
