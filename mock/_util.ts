// Interface data format used to return a unified format

import { Recordable } from 'vite-plugin-mock'

// 多条件筛选数据
// @param condition 过滤条件
// @param data 需要过滤的数据
export const filter = (condition: any, data: any) =>
    data.filter((item: { [x: string]: any }) =>
        Object.keys(condition).every((key) =>
            String(item[key]).toLowerCase().includes(String(condition[key]).trim().toLowerCase())
        )
    )

export function resultSuccess<T = Recordable>(data: T, { msg = '查询成功' } = {}) {
    return {
        code: 200,
        data,
        msg
    }
}

export function resultPageSuccess<T = any>(page: number, pageSize: number, list: T[], { msg = '查询成功' } = {}) {
    const pageData = pagination(page, pageSize, list)

    return {
        ...resultSuccess({
            record: pageData,
            pageInfo: {
                total: list.length,
                currentPage: page,
                pageSize
            }
        }),
        msg
    }
}

export function resultError(msg = 'Request failed', { code = 0, result = null } = {}) {
    return {
        code,
        result,
        msg,
        type: 'error'
    }
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
    const offset = (pageNo - 1) * Number(pageSize)
    const ret =
        offset + Number(pageSize) >= array.length
            ? array.slice(offset, array.length)
            : array.slice(offset, offset + Number(pageSize))
    return ret
}

export interface requestParams {
    method: string
    body: any
    headers?: { token?: string; lang: string }
    query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
    return headers?.token
}
