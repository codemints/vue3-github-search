import { createApp } from 'vue'
import App from './App.vue'
import '@scss/main.scss'
import "@ico/font-awesome/scss/fontawesome.scss"
import "@ico/font-awesome/scss/solid.scss"
import "@ico/font-awesome/scss/brands.scss"
import "@ico/font-awesome/scss/regular.scss"
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
