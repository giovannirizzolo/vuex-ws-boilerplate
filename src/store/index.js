import { createStore } from 'vuex'
import { INCREMENT_COUNTER } from '@/store/mutations/button'
import { STORE_WS_MESSAGE } from '@/store/mutations/ws';
// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
            wsMessages: []
        }
    },
    mutations: {
        [INCREMENT_COUNTER](state) {
            state.count++;
        },
        [STORE_WS_MESSAGE](state, payload) {
            state.wsMessages.push(payload);
        }
    }
})

export default store