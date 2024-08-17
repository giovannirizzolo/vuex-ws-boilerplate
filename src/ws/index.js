import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { STORE_WS_MESSAGE } from '../store/mutations/ws';

export function useWS() {

    const WS = new WebSocket('ws://localhost:8080')
    const store = useStore();

    WS.onopen = (e) => {
        WS.send('Connection with the server')
    }

    WS.onmessage = (e) => {
        if (!e) return
        storeWSPayload(e.data)
    }

    const storeWSPayload = (message) => {
        store.commit(STORE_WS_MESSAGE, message)
    }

    onMounted(() => {
        //ws client sending message to server each sec [TEST]
        setInterval(() => {
            WS.send('Sending message to the server')
        }, 1000)
    })

}