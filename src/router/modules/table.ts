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
                redirect: { name: 'table.base' },
                component: () => import('@/views/table/index.vue'),
                children: [
                    {
                        path: 'base',
                        name: 'table.base',
                        component: () => import('@/views/table/base.vue'),
                        meta: {
                            title: '基本表格'
                        }
                    },
                    {
                        path: 'pagination',
                        name: 'table.pagination',
                        component: () => import('@/views/table/pagination.vue'),
                        meta: {
                            title: '分页表格'
                        }
                    },
                    {
                        path: 'search',
                        name: 'table.search',
                        component: () => import('@/views/table/search.vue'),
                        meta: {
                            title: '开启搜索'
                        }
                    },
                    {
                        path: 'expand',
                        name: 'table.expand',
                        component: () => import('@/views/table/expand.vue'),
                        meta: {
                            title: '展开行'
                        }
                    },
                    {
                        path: 'groupHead',
                        name: 'table.groupHead',
                        component: () => import('@/views/table/groupHead.vue'),
                        meta: {
                            title: '多级表头'
                        }
                    }
                ]
            }
        ]
    }
]
