import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import App from './App.vue'

import Home from '@/components/Home.vue'
import OldCounter from '@/components/OldCounter.vue'
import ModernCounter from '@/components/ModernCounter.vue'
import NewCounter from '@/components/NewCounter.vue'

let routes = [
    { path: "/", component: Home },
    { path: "/old-counter", component: OldCounter },
    { path: "/modern-counter", component: ModernCounter },
    { path: "/new-counter", component: NewCounter }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

let app = createApp({})
app.use(router)
app.mount('#app')
