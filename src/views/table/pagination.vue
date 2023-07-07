<script lang="ts" setup>
import { getDemoList } from '@/service/api/table'
const demoList = ref<ITableDemoItem[]>([])
const options = ref<Table.Options>({
    // 显示分页
    showPagination: true,
    // 显示工具栏
    showToolbar: true,
    // 改变表头背景颜色
    headerCellStyle: () => ({
        background: 'var(--el-color-primary-light-9)'
    })
})
// 带有分页的表格配置
const tableDemoColumn: Table.Column<ITableDemoItem>[] = [
    { type: 'index', width: '65', label: 'No.', align: 'center' },
    { prop: 'avatar', type: 'image', label: '头像', width: '100' },
    { prop: 'name', label: '姓名', width: '100' },
    { prop: 'age', label: '年龄', width: '90', align: 'center' },
    {
        prop: 'gender',
        label: '性别',
        width: '90',
        slot: 'gender',
        align: 'center',
        searchFiledType: 'Select',
        searchFieldOptions: {
            placeholder: '请选择性别',
            data: [
                { label: '男', value: 1 },
                { label: '女', value: 0 }
            ]
        }
    },
    { prop: 'mobile', label: '手机号', width: '180' },
    { prop: 'email', label: '邮箱', showOverflowTooltip: true },
    { prop: 'address', label: '地址', showOverflowTooltip: true },
    {
        width: '180',
        label: '操作',
        buttons: [
            { name: '编辑', type: 'success', command: 'edit' },
            { name: '删除', type: 'danger', command: 'delete' }
        ]
    }
]
// 获取数据
const fetchDemoList = async (page = 1, pageSize = 10) => {
    const { record, pageInfo } = await getDemoList({ page, pageSize })
    demoList.value = record
    options.value.paginationConfig = pageInfo
}
await fetchDemoList()
</script>
<template>
    <el-card>
        <template #header>
            <span>分页表格</span>
        </template>
        <easy-table
            :columns="tableDemoColumn"
            :table-data="demoList"
            :options="options"
            @refresh="fetchDemoList(1)"
            @pagination-change="(page, pageSize) => fetchDemoList(page, pageSize)">
            <template #extra><el-button type="primary" plain>工具栏可以自定义内容</el-button></template>
            <template #gender="{ row }">
                <span> {{ row.gender ? '男' : '女' }}</span>
            </template>
        </easy-table>
    </el-card>
</template>
<style lang="scss" scoped></style>
