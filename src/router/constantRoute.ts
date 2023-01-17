import commonRoutes from './modules'
import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'
// 基础路由
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: markRaw(Layout),
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/index/index.vue'),
            },
        ],
    },
    {
        path: '/about',
        component: markRaw(Layout),
        meta: {
            title: '关于',
        },
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
            },
        ],
    },
    ...commonRoutes,
    // 404页面一定放在最后面
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/errorPage/404.vue'),
    },
]
