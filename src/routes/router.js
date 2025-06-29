
import Contato from '@/pages/Contato.vue'
import Home from '@/pages/Home.vue'
import Sobre from '@/pages/Sobre.vue'
import Videos from '@/pages/Videos.vue'


import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/videos', component: Videos },
    { path: '/sobre', component: Sobre },
    { path: '/contato', component: Contato }

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router