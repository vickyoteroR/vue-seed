import Vue from 'vue'
import esES from './es-ES.json'
import enGB from './en-GB.json'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'es-ES',
    fallbackLocale: 'en-GB',
    messages: {
        'en-GB': enGB,
        'es-ES': esES
    }
});