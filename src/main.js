import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import "../public/index.css"
createApp(App).use(router).use(createPinia()).mount('#app')
