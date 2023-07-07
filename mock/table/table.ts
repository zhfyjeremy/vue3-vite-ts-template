/* eslint-disable quotes */
import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
import { resultPageSuccess, filter } from '../_util'

const demoList = (() => {
    const result: any[] = []
    for (let index = 0; index < 1000; index++) {
        result.push({
            id: Number(`${index + 1}`),
            'age|16-36': 1, // 随机生成一个16-18的数字
            address: '@county(true)',
            name: '@cname()',
            'gender|1': [0, 1], // 取0,1中的一个
            avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
            date: "@date('yyyy-MM-dd')",
            time: "@time('HH:mm')",
            'status|1': ['normal', 'enable', 'disable'],
            mobile: /^1[385][1-9]\d{8}/, // 手机号
            email: /[a-z]{2,10}@(126|163|qq|gmail)\.com/ // "email":"@email"
        })
    }
    return result
})()

export default [
    {
        url: '/api/table/getDemoList',
        // timeout: 100,
        method: 'get',
        response: ({ query }) => {
            const { page = 1, pageSize = 10 } = query
            const newQuery = { ...query }
            delete newQuery.page
            delete newQuery.pageSize
            // 模拟条件筛选
            const data = filter(newQuery, demoList)
            return resultPageSuccess(+page, +pageSize, data)
        }
    }
] as MockMethod[]
