## 参数介绍

#### Table 属性

| 参数      | 说明                 | 类型                 | 是否必填 | 默认值 |
| :-------- | :------------------- | :------------------- | -------- | ------ |
| tableData | table 表格的数据     | Array\<object>       | 是       | —      |
| options   | 自定义配置           | object               | 否       | —      |
| columns   | 列 column 的配置数组 | Array\<Table.Column> | 是       | —      |

#### Options 配置项

> Options 配置请参考 element-plus 官网的[Table 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

#### Options 新增参数

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| showSearch | 是否展示搜索查询 | boolean | 否 | true |
| showToolbar | 是否显示工具栏 | boolean | 否 | true |
| showPagination | 是否展示分页器 | boolean | 否 | false |
| paginationConfig | 分页器配置项，详情见下方 paginationConfig 配置，(当 showPagination 为 true，该配置项必传) | Pagination | 否 | — |
| beforeEditSubmit | 编辑单元格保存前的钩子 | ({ row, key, value, index}) => Promise<any> | 否 | - |

#### paginationConfig 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| total | 总条目数 | number | 是 | 0 |
| currentPage | 当前页数，支持 v-model 双向绑定 | number | 是 | 1 |
| pageSize | 每页显示条目个数，支持 v-model 双向绑定 | number | 是 | 10 |
| pageSizes | 每页显示个数选择器的选项设置 | number[] | 否 | [10, 20, 30, 40, 50, 100] |
| layout | 组件布局，子组件名用逗号分隔 | string | 否 | 'total, sizes, prev, pager, next, jumper' |
| background | 是否为分页按钮添加背景色 | boolean | 否 | false |

#### Column 配置项

> Column 配置请参考 element-plus 官网的[Table-column 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

#### Column 配置新增参数

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| type | 对应列的类型。 如果设置了 selection 则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮；如果设置 image，则显示图片; 如是设置 date，则显示格式化后的日期 | selection / index / expand / image / date | 否 | — |
| slot | 插槽名称，自定义列的内容 作用域参数为 `{ row, $index }` | string | 否 | — |
| dateFormat | 显示在页面中的日期格式，当 type === date 时，可更改日期显示格式 | 'YYYY-MM-DD' / 'YYYY-MM-DD HH:mm:ss' / 'YYYY-MM-DD HH:mm' / 'YYYY-MM' | 否 | YYYY-MM-DD |
| search | 该字段是否被搜索 | boolean | 否 | false |
| searchFiledType | 搜索字段展示类型。如： 搜索框、下拉框、时间选择框等 | 'Input' / 'Select' / 'DatePicker' / 'TimePicker' / 'Switch' / 'InputNumber' | 否 | false |
| searchFieldOptions | 自定义搜索配置， 详情见下方 searchFieldOptions 配置 | object | 否 | - |
| buttons | 按钮组的内容 | Array\<object> | 否 | — |
| render | 渲染函数，渲染这一列的每一行的单元格 | ({ row, index }) => VNode | 否 | — |
| headerRender | 渲染函数，渲染列表头 | ({ column, index }) => VNode | 否 | — |
| headerSlot | 自定义表头插槽名字 | string | 否 | — |
| children | 配置多级表头的数据集合, 具体用法可参考多级表头使用示例。 | Array\<object> | 否 | — |
| editable | 是否可编辑 | boolean | 否 | — |
| editRule | 编辑单元格时是否开启验证 | boolean / ((value: any, callback: function) => void) | 否 | — |
| editValueFormat | 格式化可编辑单元格的内容，可以返回字符串，也可以返回 VNode。 当返回 VNode 时类似于使用 render 函数渲染 | boolean / ((value: any, callback: function) => void) | 否 | — |
| editOptions | 编辑单元格时的自定义配置， 详情见下方 editOptions 配置 | object | 否 | — |

#### searchFieldOptions 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| data | 配置选项内容 （如：当 searchFiledType 等于 Select 时，需要显示的下拉数据） | Array\<object> | 是 | - |
| value | 下拉框默认回显的值 | any | 否 | - |
| labelkey | data 数据中对应的 key 的字段名 | string | 否 | 'label' |
| valueKey | data 数据中对应的 value 的字段名 | string | 否 | 'value' |
| placeholder | 占位文字 | string | 否 | - |
| [key: string] | 展示不同类型的搜索组件时，传递的额外参数。searchFiledType 指定的类型就是编辑时用到的组件，具体参数请参考 element-plus 官网中的属性介绍 | any | 否 | - |

#### editOptions 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| componentType | 当单元格可编辑时， 展示的元素类型 | 'Input' / 'Select' / 'DatePicker' / 'TimePicker' / 'Switch' / 'InputNumber' | 否 | 'Input' |
| [key: string] | 单元格编辑时，传递的额外参数。type 指定的类型就是编辑时用到的组件，具体参数请参考 element-plus 官网中的属性介绍 | any | 否 | - |

#### Buttons 配置项

| 参数    | 说明                              | 类型                                        | 是否必填 | 默认值 |
| :------ | :-------------------------------- | :------------------------------------------ | -------- | ------ |
| name    | 按钮显示的名称                    | string                                      | 是       | —      |
| command | 派发到 command 回调函数的指令参数 | string/number                               | 是       | —      |
| size    | 用于控制该按钮组内按钮的大小      | large / default / small                     | 是       | —      |
| type    | 用于控制该按钮组内按钮的类型      | primary / success / warning / danger / info | 否       | —      |

#### Table 插槽

| 插槽名 | 说明                                               | 插槽作用域     |
| :----- | :------------------------------------------------- | :------------- |
| expand | 当列的 type 等于 expand 时，自定义展开行区域的内容 | { row, index } |

#### Table 事件

> Table 事件请参考 element-plus 官网的[Table 事件](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)

#### Table 新增事件

| 事件名            | 说明                                           | 回调参数                  |
| :---------------- | :--------------------------------------------- | :------------------------ |
| command           | 点某个按钮组按钮被点击时会触发该事件           | command, row              |
| size-change       | pageSize 改变时触发                            | pageSize                  |
| current-change    | currentPage 改变时触发                         | currentPage               |
| pagination-change | currentPage 或者 pageSize 改变时触发           | currentPage ,pageSize     |
| search            | 当表格的搜索按钮被点击的时候会触发该事件       | Record\<string, any>      |
| refresh           | 当表格工具栏的刷新按钮被点击的时候会触发该事件 | Record\<string, any>      |
| edit-cancel       | 当单元格编辑取消的时候会触发该事件             | { row, key, value, index} |
| edit-end          | 当单元格编辑完成的时候会触发该事件             | { row, key, value, index} |

## 其他

此文档只提供基本的封装思路，如需使用到更多的业务场景，可自行扩展。
