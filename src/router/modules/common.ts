export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: 'common.login' }
    },
    {
        path: '/500',
        name: '500',
        component: () => import('@/views/errorPage/500.vue'),
        meta: { title: '500' }
    },
]
