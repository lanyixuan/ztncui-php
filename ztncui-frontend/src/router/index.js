import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/LoginView.vue'
import Main from '../views/MainView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: () => import('../views/main/HomeView.vue'),
                },
                {
                    path: 'user',
                    name: 'User',
                    component: () => import('../views/main/UserView.vue'),
                },
                {
                    path: 'network',
                    children: [
                        {
                            path: '',
                            name: 'Network',
                            component: () => import('../views/main/NetworkView.vue'),
                        },
                        {
                            path: ':networkId',
                            name: 'NetworkDetail',
                            component: () => import('../views/main/NetworkDetail.vue'),
                            meta: {activeMenu: '/network'}
                        },
                    ]
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        { path: '/:pathMatch(.*)', redirect: '/404'}
    ]
})

router.beforeEach((to, from) => {
    // 设置页面标题
    document.title = to.name === undefined ? 'ztncui-PHP' : to.name

    if (!sessionStorage.getItem('userName')){
        if ('/login' !== to.path) {
            return { name: 'Login' }
        }
    }else{
        if ('/login' === to.path) {
            return { name: 'Home' }
        }
    }

})

export default router
