import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (to.path === '/dashboard' && !userStore.isAuthenticated && !localStorage.getItem('TOKEN')) {
        next('/')
    } else {
        next()
    }
})

export default router