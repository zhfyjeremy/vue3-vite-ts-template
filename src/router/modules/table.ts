import Layout from '@/layout/index.vue'

export default [
    {
        path: '/table',
        component: markRaw(Layout),
        meta: {
            title: '表格'
        },
        children: [
            {
                path: '',
                name: 'table',
                component: () => import('@/views/table/index.vue')
            }
        ]
    }
]
