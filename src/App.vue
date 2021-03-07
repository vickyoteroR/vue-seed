<template lang="pug">
    main#app.app(:class="`app__theme--${theme}`")
        header
            h1#main-name {{ $t('name') }}

        p {{ $t('description') }}

        section
            h2 {{ $t(`sections.${$route.name}.title`) }}

        router-view

        icon-symbols.hide

</template>

<script>
import store from '@/vuex/store'
import IconSymbols from '@/assets/icon-symbols.vue'

export default {
    name: 'app',
    components: {
        IconSymbols
    },
    computed: {
        theme () {
            return store.getters.getTheme
        }
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style lang="sass">
    @import '@/styles/app'
</style>
