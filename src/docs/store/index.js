import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lNavbarHeight: null,
        lNavbarItemPadding: null
    },
    mutations: {
        SET_VALUE(state, payload){
            state[payload.name] = payload.value
        }
    },
    getters : {
        lNavbarHeight: (state) => {
            return state.lNavbarHeight
        },
        lNavbarItemPadding: (state) => {
            return state.lNavbarItemPadding
        }
    }
})
