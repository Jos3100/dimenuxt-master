import VueGoogleMaps from "@fawmi/vue-google-maps"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyBahZbaNYGqX7mM-6knyLsiiF8qC18mbbM",
            libraries: "places",
            region: "CO",
            language: "es",
        },
        autobindAllEvents: true,
    })
})