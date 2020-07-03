import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cssVariables: []
    },
    mutations: {
        SET_VALUE(state, payload){
            const pos = state.cssVariables.findIndex(item => item.name === payload.name)
            const object = {
                name: payload.name,
                value: payload.value,
                root: payload.root
            }
            if(pos == -1){
                state.cssVariables.push(object)
            } else {
                Vue.set(state.cssVariables, pos, object)
            }
        }
    },
    getters : {
        cssVariables: (state) => {
            return state.cssVariables
        }
    }
})
