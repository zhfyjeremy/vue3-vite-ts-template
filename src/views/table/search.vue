<script lang="ts" setup>
import { EasyMessage } from '@/components/EasyMessage'
import { ElTag } from 'element-plus'
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
const statuList = [
    { label: '正常', value: 1 },
    { label: '禁用', value: 0 }
]
// 开启表格搜索配置
const tableSearchColumn: Table.Column<IUser>[] = [
    { type: 'selection', width: '50' },
    { type: 'index', width: '50', label: 'No.' },
    { prop: 'name', label: '名字', search: true },
    {
        prop: 'status',
        label: '状态',
        search: true,
        searchFiledType: 'Select',
        searchFieldOptions: {
            data: statuList
        },
        render: ({ row }) =>
            h(ElTag, { type: row.status === 1 ? 'success' : 'danger' }, () => (row.status === 1 ? '正常' : '禁用'))
    },
    {
        type: 'date',
        prop: 'date',
        label: '日期',
        search: true,
        searchFiledType: 'DatePicker',
        searchFieldOptions: { valueFormat: 'x' }
    },
    { prop: 'address', label: '地址', slot: 'address', showOverflowTooltip: true },
    {
        width: '150',
        label: '操作',
        buttons: [
            { name: '编辑', type: 'success', command: 'edit' },
            { name: '删除', type: 'danger', command: 'delete' }
        ]
    }
]
const handleCommand = (command: Table.Command, row: any, index: number) => {
    switch (command) {
        case 'edit':
            EasyMessage.success(`编辑--${row.name} ----- ${index}`)
            break
        case 'delete':
            EasyMessage.error(`删除--${row.name} ----- ${index}`)
            break
        default:
            break
    }
}

// 搜索事件
const handleSearch = (info: any) => {
    EasyMessage.success('搜索参数在控制台中查看')
    console.log(info)
}
</script>
<template>
    <!-- 开启表格搜索 -->
    <el-card class="mb-5">
        <template #header>
            <div class="card-header">
                <span>开启表格搜索</span>
            </div>
        </template>
        <easy-table
            :options="{
                showSearch: true
            }"
            :columns="tableSearchColumn"
            :table-data="tableData"
            @command="handleCommand"
            @search="handleSearch">
            <template #address="{ row }">
                <span>演示slot使用--->{{ row.address }}</span>
            </template>
        </easy-table>
    </el-card>
</template>
<style lang="scss" scoped></style>
