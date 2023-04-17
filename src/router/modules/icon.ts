import Layout from '@/layout/index.vue'

export default [
    {
        path: '/icon',
        component: markRaw(Layout),
        meta: {
            title: '图标'
        },
        children: [
            {
                path: '',
                name: 'icon',
                component: () => import('@/views/icon/index.vue')
            }
        ]
    }
]
