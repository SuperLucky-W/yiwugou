import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Message from '../views/Message.vue'
import Buycar from '../views/Buycar.vue'
import Mine from '../views/Mine.vue'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

//解决路由跳转原路由或者刷新出错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/buycar',
        name: 'Buycar',
        component: Buycar
    },
    {
        path: '/mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/landing',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    // const id = localStorage.getItem(status)
    if (to.path == '/mine' || to.path == '/message') {
        if (localStorage.getItem('status')) {
            next()
        } else {
            next("/landing?return=" + to.path)
        }
    } else {
        next()
    }
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router