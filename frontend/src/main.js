// File: main.js
// Description: Servers as the entry point of the Vue application, initializes Vue, registers plugins, and mounts
// the root component
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

