import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './moduleA';
import moduleB from './moduleB';
import { myPlugin } from './plugins'

Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        count: 10,
        name: 'NewStation',
        todos: [
            { id: 1, text: 'todos -1', done: true },
            { id: 2, text: 'todos -2', done: false },
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        changeName(state) {
            state.name += 'NewPlace'
        }
    },
    getters: {
        doneTodos: (state, getter) => (alias='-默认值', id) => {
            return state.todos.filter(todo => todo.id === id)[0].text + getter.getFillName + alias;
        },
        getFillName: (state) => {
            return state.name + '---------'
        }
    },
    actions: {
        actionIncrement ({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('increment');
                    resolve()
                });
            })
        },
        actionB ({ dispatch, commit }) {
            return dispatch('actionIncrement').then(() => {
                commit({
                    type: 'changeName',
                    account: '1000'
                })
            })
        },


        // 异步dispatch async await
        async actionData({ commit }) {
            commit('increment', await new Promise((resolve) => {
                setTimeout(() => {
                    commit('increment');
                    resolve()
                }, 5000);
            }));
        },

        async actionS({ dispatch, commit }) {
            await dispatch('actionData');
            commit('changeName');
        }
    },
    modules: {
        a: moduleA,
        b: moduleB,
        account: {
            namespaced: true,
            state: {
                logined: 1,
                userName: 'kiki'
            },
            mutations: {
                login (state) {
                    state.logined = 58
                }
            },
            getters: {
                isAdmin(state) {
                    return state.logined>20? 'admin': 'guest'
                }
            },
            actions: {
                logDispatch({commit}) {
                    commit({type: 'login', logined: 1})
                }
            }
        }
    },
    plugins: [myPlugin]
});

export default store;