<template>
    <div ref="tableWrap" :class="{ 'p-5': isFullscreen }" style="background: var(--el-fill-color-blank)">
        <!-- 搜索栏 -->
        <TableSearchVue v-if="_options.showSearch" :columns="columns" @search="handleSearch" />
        <!-- 当某些场合启用了搜索功能，但是又想在搜索和表格之间加一个工具栏的情况下，或许这个插槽能够派上用场 -->
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
            <el-table ref="tableRef" :data="tableData" v-bind="{ ...$attrs, ..._options }">
                <!-- eslint-disable-next-line vue/no-v-for-template-key -->
                <template v-for="(col, index) in columns" :key="index">
                    <!---复选框, 序号 (START)-->
                    <el-table-column
                        v-if="col.type === 'index' || col.type === 'selection' || col.type === 'expand'"
                        :index="indexMethod"
                        v-bind="(col as TableProps<any>)">
                        <!-- 当type等于expand时， 配置通过h函数渲染、txs语法或者插槽自定义内容 -->
                        <template #default="{ row, $index }">
                            <component
                                :is="renderColumnExpand({ row, col, $index }) as any"
                                :row="row"
                                :index="$index" />
                        </template>
                    </el-table-column>
                    <!---复选框, 序号 (END)-->
                    <TableColumnVue :col="col" v-else @command="handleAction">
                        <template v-for="slot in Object.keys($slots)" #[slot]="scope: Record<string, any>">
                            <slot :name="slot" v-bind="scope" />
                        </template>
                    </TableColumnVue>
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
import TableColumnVue from './TableColumn'
import TableSearchVue from './Search'
import TableToolbarVue, { type TableSize } from './TableToolbar.vue'
import { useFullscreen } from '@vueuse/core'
import { type ComputedRef, useSlots } from 'vue'
import { EasyMessage } from '../EasyMessage'
import { createTableContext } from './useTableContext'
import { useRenderHelper } from './TableColumn/render-helper'
import { EmitsEvent, TableInstance } from '.'
import type { TableProps } from 'element-plus'
interface ITableProps {
    tableData: Array<object> // table的数据
    columns: Table.Column[] // 每列的配置项
    options?: Table.Options
}

const emit = defineEmits<EmitsEvent>()
const props = defineProps<ITableProps>()
const tableSize = ref<TableSize>('default') // 表格的尺寸
// const isFullScreen = ref(false) // 是否全屏
const tableRef = ref<TableInstance>()

const tableWrap = ref<HTMLElement | null>(null)
const { renderColumnExpand } = useRenderHelper(useSlots())
// 设置option默认值，如果传入自定义的配置则合并option配置项
const _options: ComputedRef<Table.Options> = computed(() => {
    const option = {
        stripe: false,
        // tooltipEffect: 'dark',
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
createTableContext({ options: _options.value, emit })
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
const handleAction = (command: Table.Command, row: any) => {
    emit('command', command, row)
}

// 暴露给父组件参数和方法，如果外部需要更多的参数或者方法，都可以从这里暴露出去。
defineExpose({ element: tableRef, search: handleSearch })
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
