import api from '@/store/api'

export default {
    namespaced: true,

    state: {
        session: true,
        user: "Студент"
    },

    mutations: {
        //Изменить значение сессии
        setSession(state, data) {state.session = data.sessionId},
        //Установать юзера
        setUser(state, data) {state.user = data.user}
    },

    actions: {
        async getSession(context) {context.commit('setSession', await api.auth.getSession())},
        async getUser(context) {context.commit('setUser', await api.auth.getUser())}
    }
}