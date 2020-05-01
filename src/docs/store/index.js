import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cssVariables: {}
    },
    mutations: {
        SET_VALUE(state, payload){
            Vue.set(state.cssVariables, payload.name, payload.value)
        }
    },
    getters : {
        cssVariables: (state) => {
            return state.cssVariables
        }
    }
})
