<template>
    <div ref="tableWrap" :class="{ 'p-5': isFullscreen }" style="background: var(--el-fill-color-blank)">
        <!-- 搜索栏 -->
        <TableSearchVue v-if="_options.showSearch" :columns="columns" @search="handleSearch" />
        <!-- 当某些场合启用了搜索功能，但是又想在搜索和表格之间加一个工具栏的情况下，或者这个插槽能够派上用场 -->
        <slot name="toolbar">
            <!-- 内置了一个工具栏包含了切换table size和刷新按钮，如果和你使用场景不匹配，完全可以使用 toolbar 这个插槽在外部定义一个新的工具栏 -->
            <TableToolbarVue
                v-if="_options.showToolbar"
                v-model="tableSize"
                :is-fullscreen="isFullscreen"
                @change-screen="handleChangeScreen"
                @refresh="emit('refresh')">
                <template #extra>
                    <slot name="extra" />
                </template>
            </TableToolbarVue>
        </slot>
        <!-- table表格 -->
        <el-config-provider :size="tableSize">
            <el-table
                ref="tableRef"
                :data="tableData"
                v-bind="_options"
                @selection-change="handleSelectionChange"
                @row-click="handleRowClick"
                @cell-click="handleCellClick"
                @sort-change="handleSortChange">
                <!-- eslint-disable-next-line vue/no-v-for-template-key -->
                <template v-for="(col, index) in columns" :key="index">
                    <!---复选框, 序号 (START)-->
                    <el-table-column
                        v-if="col.type === 'index' || col.type === 'selection' || col.type === 'expand'"
                        :index="indexMethod"
                        v-bind="col">
                        <!-- 当type等于expand时， 配置通过h函数渲染、txs语法或者插槽自定义内容 -->
                        <template #default="{ row, $index }">
                            <!-- render函数 (START) : 使用内置的component组件可以支持h函数渲染和txs语法 -->
                            <component v-if="col.render" :is="col.render" :row="row" :index="$index" />
                            <!-- render函数 (END) -->
                            <!-- 自定义slot (START) -->
                            <slot v-else-if="col.slot" name="expand" :row="row" :index="$index"></slot>
                            <!-- 自定义slot (END) -->
                        </template>
                    </el-table-column>
                    <!---复选框, 序号 (END)-->
                    <!-- 渲染插槽 START -->
                    <TableColumnVue :col="col" v-else @command="handleAction">
                        <template v-for="slot in Object.keys($slots)" #[slot]="scope: Record<string, any>">
                            <slot :name="slot" v-bind="scope" />
                        </template>
                    </TableColumnVue>
                    <!-- 渲染插槽 END -->
                </template>
            </el-table>
            <!-- 分页器 -->
            <div v-if="_options.showPagination" class="mt-5">
                <el-pagination
                    v-bind="_paginationConfig"
                    @size-change="pageSizeChange"
                    @current-change="currentPageChange" />
            </div>
        </el-config-provider>
    </div>
</template>
<script lang="ts" setup>
import TableColumnVue from './TableColumn.vue'
import TableSearchVue from './TableSearch.vue'
import TableToolbarVue, { type TableSize } from './TableToolbar.vue'
import { useFullscreen } from '@vueuse/core'
import { ElTable } from 'element-plus'
import { ComputedRef } from 'vue'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { EasyMessage } from '../EasyMessage'
export type SortParams<T> = {
    column: TableColumnCtx<T | any>
    prop: string
    order: Table.Order
}
interface TableProps {
    tableData: Array<object> // table的数据
    columns: Table.Column[] // 每列的配置项
    options?: Table.Options
}

const props = defineProps<TableProps>()
const tableSize = ref<TableSize>('default') // 表格的尺寸
// const isFullScreen = ref(false) // 是否全屏
const tableRef = ref<InstanceType<typeof ElTable>>()
const tableWrap = ref<HTMLElement | null>(null)

// 设置option默认值，如果传入自定义的配置则合并option配置项
const _options: ComputedRef<Table.Options> = computed(() => {
    const option = {
        stripe: false,
        tooltipEffect: 'dark',
        showHeader: true,
        showPagination: false
        // rowStyle: () => 'cursor:pointer' // 行样式
    }
    return Object.assign(option, props?.options)
})
// 合并分页配置
const _paginationConfig = computed(() => {
    const config = {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 40, 50, 100],
        layout: 'total, sizes, prev, pager, next, jumper'
    }
    return Object.assign(config, _options.value.paginationConfig)
})
const emit = defineEmits([
    'selection-change', // 当选择项发生变化时会触发该事件
    'row-click', // 当某一行被点击时会触发该事件
    'cell-click', // 当某个单元格被点击时会触发该事件
    'command', // 按钮组事件
    'size-change', // pageSize事件
    'current-change', // currentPage按钮组事件
    'pagination-change', // currentPage或者pageSize改变触发
    'search', // 搜索
    'sort-change', // 列排序发生改变触发
    'refresh' // 工具栏刷新按钮重新刷新
])
const { isSupported, isFullscreen, toggle } = useFullscreen(tableWrap)

// 切换表格全屏
const handleChangeScreen = () => {
    if (!isSupported) {
        return EasyMessage.error('您的浏览器暂不支持全屏')
    }
    toggle()
}
// 搜索
const handleSearch = (val: Record<string, any>) => {
    emit('search', val)
}
// 自定义索引
function indexMethod(index: number) {
    const tabIndex = index + (_paginationConfig.value.currentPage - 1) * _paginationConfig.value.pageSize + 1
    return tabIndex
}
// 切换pageSize
const pageSizeChange = (pageSize: number) => {
    emit('size-change', pageSize)
    emit('pagination-change', 1, pageSize)
}
// 切换currentPage
const currentPageChange = (currentPage: number) => {
    emit('current-change', currentPage)
    emit('pagination-change', currentPage, _paginationConfig.value.pageSize)
}
// 按钮组事件
const handleAction = (command: Table.Command, row: any, index: number) => {
    emit('command', command, row, index)
}
// 多选事件
const handleSelectionChange = (val: any[]) => {
    emit('selection-change', val)
}
// 当某一行被点击时会触发该事件
const handleRowClick = (row: any, column: TableColumnCtx<any>, event: MouseEvent) => {
    emit('row-click', row, column, event)
}
// 当某个单元格被点击时会触发该事件
const handleCellClick = (row: any, column: TableColumnCtx<any>, cell: any, event: MouseEvent) => {
    emit('cell-click', row, column, cell, event)
}
// 当表格的排序条件发生变化的时候会触发该事件
// 在列中设置 sortable 属性即可实现以该列为基准的排序， 接受一个 Boolean，默认为 false。 可以通过 Table 的 default-sort 属性设置默认的排序列和排序顺序。 如果需要后端排序，需将 sortable 设置为 custom，同时在 Table 上监听 sort-change 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。
const handleSortChange = ({ column, prop, order }: SortParams<any>) => {
    emit('sort-change', { column, prop, order })
}
// 暴露给父组件参数和方法，如果外部需要更多的参数或者方法，都可以从这里暴露出去。
defineExpose({ element: tableRef })
</script>
<style lang="scss" scoped>
:deep(.el-image__inner) {
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
}
</style>
