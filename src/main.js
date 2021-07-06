import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store.js'
import App from './App.vue'

import OldCounter from '@/components/OldCounter.vue'
import ModernCounter from '@/components/ModernCounter.vue'
import NewCounter from '@/components/NewCounter.vue'

let routes = [
    { path: "/old-counter", component: OldCounter },
    { path: "/modern-counter", component: ModernCounter },
    { path: "/new-counter", component: NewCounter }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

let app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
