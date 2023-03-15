import Layout from '@/layout/index.vue'

export default [
    {
        path: '/form',
        component: markRaw(Layout),
        meta: {
            title: '表单'
        },
        children: [
            {
                path: '',
                name: 'form',
                component: () => import('@/views/form/index.vue')
            }
        ]
    }
]
