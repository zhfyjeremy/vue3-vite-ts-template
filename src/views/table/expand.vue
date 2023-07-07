<script lang="ts" setup>
interface IUser {
    date: number
    status: number
    name: string
    address: string
}
// 表格数据
const tableData: IUser[] = [
    {
        date: 1660737564000,
        name: '佘太君',
        status: 1,
        address: '上海市普陀区金沙江路 1516 弄'
    },
    {
        date: 1462291200000,
        name: '王小虎',
        status: 1,
        address: '上海市普陀区金沙江路 1517 弄'
    },
    {
        date: 1462032000000,
        name: '王小帅',
        status: 1,
        address: '上海市普陀区金沙江路 1519 弄'
    },
    {
        date: 1462204800000,
        name: '王小呆',
        status: 0,
        address: '上海市普陀区金沙江路 1516 弄'
    }
]
// 展开行
const renderExpandContent = (row: IUser) =>
    h('div', { class: 'p-5' }, [
        h('p', `名字：${row.name}`),
        h('p', `地址：${row.address}`),
        h('p', `日期：${row.date}`)
    ])
const tableColumns4: Table.Column<IUser>[] = [
    // 使用render函数渲染展开行的内容
    { type: 'expand', width: '50', render: ({ row }) => renderExpandContent(row) },
    // { type: 'expand', width: '50', slot: 'expand' },
    { type: 'index', width: '50', label: 'No.' },
    { prop: 'name', label: '名字', sortable: true },
    { prop: 'date', label: '日期', type: 'date' },
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
</script>
<template>
    <!-- 展开行 -->
    <el-card class="mb-5">
        <template #header>展开行</template>
        <EasyTable :columns="tableColumns4" :table-data="tableData" />
    </el-card>
</template>
<style lang="scss" scoped></style>
