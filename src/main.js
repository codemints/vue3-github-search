import { createApp } from 'vue'
import App from './App.vue'
import '@scss/main.scss'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
