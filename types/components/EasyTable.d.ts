// table表格
declare namespace Table {
    type VNodeChild = import('vue').VNodeChild
    type Type = 'selection' | 'index' | 'expand' | 'image' | 'date'
    type Size = 'large' | 'default' | 'small'
    type Align = 'left' | 'center' | 'right'
    type Command = string | number
    type SearchFiledType = 'input' | 'select' | 'date'
    type DateFormat = 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM'
    type Order = 'ascending' | 'descending'
    interface ButtonItem {
        name: string
        command: Command
        size?: Size
        type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    }
    interface Sort {
        prop: string
        order: Order
        init?: any
        silent?: any
    }
    // searchFiledType === 'select' 时的需要的参数类型
    interface ISearchFieldOptions {
        data: Recode<string, any>[]
        labelkey?: string // data 数据中对应的key的字段名
        valueKey?: string // data 数据中对应的value的字段名
        placeholder?: string
        value?: any // 下拉框默认回显的值
    }
    interface Column {
        type?: Type
        // 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮
        label?: string
        prop?: string
        slot?: string
        width?: string
        align?: Align
        dateFormat?: DateFormat // 显示在页面中的日期格式，简单列举了几种格式， 可自行配置
        search?: boolean // 该字段是否被搜索
        searchFiledType?: SearchFiledType // 搜索字段展示类型。如： 搜索框、下拉框、时间选择框等
        searchFieldOption?: ISearchFieldOptions // searchFiledType === 'select' 时,额外需要的参数
        showOverflowTooltip?: boolean
        buttons?: ButtonItem[]
        render?: ({ row, index }) => VNodeChild // 渲染函数，渲染这一列的每一行的单元格
        sortable?: boolean | 'custom' // 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
        selectable?: (row, index) => boolean // 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
        headerRender?: ({ column, index }) => VNodeChild // 渲染函数，渲染列表头
        headerSlot?: string // 自定义表头插槽名字
        children?: Column[] // 配置多级表头的数据集合
    }
    interface Options {
        height?: string | number
        // Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
        stripe?: boolean // 是否为斑马纹 table
        maxHeight?: string | number // Table 的最大高度。 合法的值为数字或者单位为 px 的高度。
        size?: Size // Table 的尺寸
        showHeader?: boolean // 是否显示表头,
        tooltipEffect?: 'dark' | 'light' // tooltip effect 属性
        showSearch?: boolean // 是否展示搜索查询
        showToolbar?: boolean // 是否显示工具栏
        showPagination?: boolean // 是否展示分页器
        paginationConfig?: Pagination // 分页器配置项，详情见下方 paginationConfig 属性,(当showPagination为true，该配置项必传)
        rowStyle?: ({ row, rowIndex }) => any // 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
        defaultSort?: Sort // 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序
        rowKey?: string // 行数据的 Key，用来优化 Table 的渲染
        headerCellStyle?: import('vue').CSSProperties // 表头单元格的style样式，是一个object为所有表头单元格设置一样的 Style。注：CSSProperties类型就是一个对象，像正常在style中写css一样 {color: #f00}
        defaultExpandAll?: boolean // 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效
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
