## 前言

TableColunm 这个组件本打算用 tsx 语法写，因为 tsx 更适合封装这种判断条件很多场景的组件。但是可能有些朋友项目中没有使用 tsx，最终还是使用了 template 模版的方式。

## 参数介绍

#### Table 属性

| 参数      | 说明                 | 类型                 | 是否必填 | 默认值 |
| :-------- | :------------------- | :------------------- | -------- | ------ |
| tableData | table 表格的数据     | Array\<object>       | 是       | —      |
| options   | 自定义配置           | object               | 否       | —      |
| columns   | 列 column 的配置数组 | Array\<Table.Column> | 是       | —      |

#### Options 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| height | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string / number | 否 | — |
| maxHeight | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。 | string / number | 否 | — |
| size | 字段名称 对应列内容的字段名 | large / default /small | 否 | — |
| showHeader | 是否显示表头 | string | 否 | true |
| tooltipEffect | tooltip effect 属性 | dark / light | 否 | dark |
| stripe | 是否为斑马纹 table | boolean | 否 | false |
| showPagination | 是否展示分页器 | boolean | 否 | false |
| paginationConfig | 分页器配置项，详情见下方 paginationConfig 配置，(当 showPagination 为 true，该配置项必传) | Pagination | 否 | — |
| rowStyle | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | function({ row, rowIndex }) / object | 否 | () => 'cursor:pointer' |
| defaultSort | 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序 | {prop: string,order:{'ascending' / 'descending'}, init?: any, silent?: any} | 否 | — |

`本项目中rowStyle需默认设置为cursor:pointer，不需要可删除此默认选项`

#### Column 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| type | 对应列的类型。 如果设置了 selection 则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮；如果设置 image，则显示图片; 如是设置 date，则显示格式化后的日期 | selection / index / expand / image / date | 否 | — |
| label | 每一列的标题 | string | 否 | — |
| prop | 字段名称 对应列内容的字段名 | string | 否 | — |
| slot | 插槽名称，自定义列的内容 作用域参数为 `{ row, $index }` | string | 否 | — |
| width | 对应列的宽度 | string / number | 否 | — |
| align | 对齐方式 | left / center / right | 否 | left |
| dateFormat | 显示在页面中的日期格式，当 type === date 时，可更改日期显示格式 | 'YYYY-MM-DD' / 'YYYY-MM-DD HH:mm:ss' / 'YYYY-MM-DD HH:mm' / 'YYYY-MM' | 否 | YYYY-MM-DD |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip | boolean | 否 | false |
| buttons | 按钮组的内容 | Array\<object> | 否 | — |
| render | 渲染函数，渲染这一列的每一行的单元格 | ({ row, index }) => VNodeChild | 否 | — |
| headerRender | 渲染函数，渲染列表头 | ({ column, index }) => VNodeChild | 否 | — |
| headerSlot | 自定义表头插槽名字 | string | 否 | — |
| sortable | 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean / 'custom' | 否 | false |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | function(row, index) | 否 | — |
| children | 配置多级表头的数据集合, 具体用法可参考多级表头使用示例。 | Array\<object> | 否 | — |

#### paginationConfig 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| total | 总条目数 | number | 是 | 0 |
| currentPage | 当前页数，支持 v-model 双向绑定 | number | 是 | 1 |
| pageSize | 每页显示条目个数，支持 v-model 双向绑定 | number | 是 | 10 |
| pageSizes | 每页显示个数选择器的选项设置 | number[] | 否 | [10, 20, 30, 40, 50, 100] |
| layout | 组件布局，子组件名用逗号分隔 | string | 否 | 'total, sizes, prev, pager, next, jumper' |
| background | 是否为分页按钮添加背景色 | boolean | 否 | false |

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

| 事件名            | 说明                                       | 回调参数                 |
| :---------------- | :----------------------------------------- | :----------------------- |
| selection-change  | 当选择项发生变化时会触发该事件             | selection                |
| row-click         | 当某一行被点击时会触发该事件               | row, column, event       |
| cell-click        | 当某个单元格被点击时会触发该事件           | row, column, cell, event |
| command           | 点某个按钮组按钮被点击时会触发该事件       | command, row             |
| size-change       | pageSize 改变时触发                        | pageSize                 |
| current-change    | currentPage 改变时触发                     | currentPage              |
| pagination-change | currentPage 或者 pageSize 改变时触发       | currentPage ,pageSize    |
| sort-change       | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order }  |

## 其他

此文档只提供基本的封装思路，如需使用到更多的业务场景，可自行扩展。如： 搜索，api 请求等
