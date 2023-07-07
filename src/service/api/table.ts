import http from '@/service/request'

/**
 * 获取表格demo数据
 * @returns  ITableDemoItem[]
 */
export type TableDemoParams = { page: number; pageSize: number; mobile?: string; name?: string; gender?: number }

export function getDemoList(params: TableDemoParams) {
    return http.get<IPageData<ITableDemoItem>>('/api/table/getDemoList', params)
}
