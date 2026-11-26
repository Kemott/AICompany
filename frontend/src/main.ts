import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AdminLte from '@adminlte/vue'
import '@adminlte/vue/css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(AdminLte)
app.use(createPinia())
app.use(router)

app.mount('#app')
