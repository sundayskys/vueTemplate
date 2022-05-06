import {createStore} from "vuex";

const store = createStore({
    state: {
        name: ''
    },
    mutations: {
        loginIn(state, name) {
            state.name = name
        },
        loginOut(state) {
            state.name = ''

        }
    }
})
export default store
