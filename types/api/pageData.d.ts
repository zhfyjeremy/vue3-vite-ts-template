interface IPageInfo {
    currentPage: number
    pageSize: number
    total: number
}

interface IPageData<T> {
    record: T[]
    pageInfo: IPageInfo
}
