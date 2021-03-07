import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/lang/i18n'

Vue.use(Vuex)
Vue.use(i18n)

const state = {
    lang: 'es-ES',
    theme: 'default'
}

const mutations = {
    setTheme(state, theme) {
        state.theme = theme
    },
    setLang(state, lang) {
        state.lang = lang
        i18n.locale = lang
    }
}

const actions = {
    setTheme: ({ commit }) => commit('setTheme'),
    setLang: ({ commit }) => commit('setLang')
}

const getters = {
    getTheme: state => state.theme,
    getLang: state => state.lang
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})