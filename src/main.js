import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/router'
import App from './App.vue'
import '@/assets/main.css'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(createPinia())
    .mount('#app')
