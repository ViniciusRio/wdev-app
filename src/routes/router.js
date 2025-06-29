
import Home from '@/pages/Home.vue'
import Videos from '@/pages/Videos.vue'


import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/videos', component: Videos }

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router