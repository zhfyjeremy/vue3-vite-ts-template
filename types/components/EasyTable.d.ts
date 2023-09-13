// table表格
import type { TableProps, TableColumnCtx } from 'element-plus'
import type { VNode } from 'vue'
export = Table
export as namespace Table
declare namespace Table {
    type Type = 'selection' | 'index' | 'expand' | 'image' | 'date'
    type Size = 'large' | 'default' | 'small'
    type Align = 'left' | 'center' | 'right'
    type Command = string | number
    type DateFormat = 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM'
    type Order = 'ascending' | 'descending'
    // 当单元格可编辑时， 展示的元素类型
    type ComponentType = 'Input' | 'Select' | 'DatePicker'
    interface ButtonItem {
        name: string
        command: Command
        size?: Size
        type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    }

    interface ISearchFieldOptions {
        data?: Record<string, any>[]
        labelkey?: string // data 数据中对应的key的字段名
        valueKey?: string // data 数据中对应的value的字段名
        value?: any // 下拉框默认回显的值
        placeholder?: string // 提示语
        [key: string]: any // 展示不同类型的搜索组件时，传递的额外参数。searchFiledType 指定的类型就是编辑时用到的组件，具体参数请参考 element-plus 官网中的属性介绍
    }

    interface Column<RecordType = any> extends Partial<TableColumnCtx<RecordType>> {
        prop?: keyof RecordType // 对应列内容的字段名
        type?: Type // 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮
        slot?: string // 插槽名称，自定义列的内容 作用域参数为 { row, $index }
        align?: Align // 对齐方式
        headerAlign?: Align // 表头对齐方式，若不设置该项，则使用表格的对齐方式
        dateFormat?: DateFormat // 显示在页面中的日期格式，简单列举了几种格式， 可自行配置
        search?: boolean // 该字段是否被搜索
        searchFiledType?: ComponentType // 搜索字段展示类型。如： 搜索框、下拉框、时间选择框等
        searchFieldOptions?: ISearchFieldOptions // 指定 searchFiledType 时,额外需要的参数
        buttons?: ButtonItem[]
        render?: (params: { row: RecordType; index: number }) => VNode // 渲染函数，渲染这一列的每一行的单元格
        headerRender?: ({ column, index }) => VNode // 渲染函数，渲染列表头
        headerSlot?: string // 自定义表头插槽名字
        children?: Column<RecordType>[] // 配置多级表头的数据集合
    }
    interface Options<T = any> extends Omit<TableProps<T>, 'data'> {
        context?: Table<T>
        showSearch?: boolean // 是否展示搜索查询
        showToolbar?: boolean // 是否显示工具栏
        showPagination?: boolean // 是否展示分页器
        paginationConfig?: Pagination // 分页器配置项，详情见下方 paginationConfig 属性,(当showPagination为true，该配置项必传)
    }

    interface Pagination {
        total: number // 总条目数
        currentPage: number // 当前页数，支持 v-model 双向绑定
        pageSize: number // 每页显示条目个数，支持 v-model 双向绑定
        pageSizes?: number[] // 每页显示个数选择器的选项设置
        layout?: string // 组件布局，子组件名用逗号分隔
        background?: boolean // 是否为分页按钮添加背景色
    }
}
