const storeModule = {
    state: {
        tea: 1,
        wahaha: 'Shandi',
        water: [
            { id: 1, kind: 'flag -1', done: true },
            { id: 2, kind: 'flag -2', done: false },
        ]
    },
    mutations: {
        increTea(state) {
            state.tea = 10;
        },
        changeWahaha(state) {
            state.slump += ' molen'
        }
    },
    getters: {
        doneWaters: (state, getter, rootState) => {
            return state.water.filter(todo => todo.done)[0].kind + getter.getFillwahaha + '99999999' + rootState.wahaha;
        },
        getFillwahaha: (state) => {
            return state.wahaha + '---------'
        }
    },
}


export default storeModule