import { createStore } from 'vuex'

let store = createStore({
    state() {
        let counter = 0 

        return {
            counter
        }
    },
    getters: {
        getValue(state) {
            // Could make API call here and return the value
            // Do not modify data in getters
            return state.counter
        }
    },
    mutations: {
        incrementValue(state, payload) {
            // Could make API call here and modify the value
            state.counter = state.counter + parseFloat(payload)
        },
        decrementValue(state, payload) {
            state.counter = state.counter - parseFloat(payload)
        },
        resetValue(state) {
            state.counter = 0
        }
    }
})

export default store