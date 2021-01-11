import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/classify',
        name: 'Classify',
        component: Classify
    },
    {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router