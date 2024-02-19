// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    modules: [
        'nuxt-vuefire',
        '@nuxtjs/tailwindcss'
    ],

    vuefire: {
        config: {
            apiKey: "AIzaSyDRjzcJNk0YWQYhM1s7EtnspaKhML9m5Zw",
            authDomain: "dime-menu.firebaseapp.com",
            databaseURL: "https://dime-menu-default-rtdb.firebaseio.com",
            projectId: "dime-menu",
            storageBucket: "dime-menu.appspot.com",
            messagingSenderId: "546886363397",
            appId: "1:546886363397:web:41216d1cb3febf76506f6c",
            measurementId: "G-QE24L2WYXZ"
        }
    },

    // app config
    app: {
        // global transition
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    build: {
        transpile: ['@fawmi/vue-google-maps']
    },

})
