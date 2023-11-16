// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase'

],
  supabase: {
    redirect: false
  },
  css: [
    // this line include bootstrap.css in each html file on generate 
    'bootstrap/dist/css/bootstrap.css'
  ],
})