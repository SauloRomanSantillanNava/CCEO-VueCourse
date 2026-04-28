import { createStore } from 'vuex'

export default createStore {
    state: {
        counter: 10,
    },
    mutations: {
        incrementar(state, payload) {
            state.container += payload
        },
        disminuir() {
            state.container -= payload
        }
    },
    actions: {
        incrementarAc({ commit }, value) {
            commit('incrementar', value)
        },
        disminuarAc({ commit }, value) {
            commit('disminuir', value)
        },
    },
    modules: {

    }
}