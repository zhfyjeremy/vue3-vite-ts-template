<script lang="ts" setup>
import { EasyMessage } from '@/components/EasyMessage'
interface IUser {
    date: number
    name: string
    address: string
}
const tableData: IUser[] = [
    {
        date: 1660737564000,
        name: '佘太君',
        address: '上海市普陀区金沙江路 1516 弄'
    },
    {
        date: 1462291200000,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    },
    {
        date: 1462032000000,
        name: '王小帅',
        address: '上海市普陀区金沙江路 1519 弄'
    },
    {
        date: 1462204800000,
        name: '王小呆',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]
const tableColumn: Table.Column<IUser>[] = [
    { type: 'selection', width: '50' },
    { type: 'index', width: '50', label: 'No.' },
    { prop: 'name', label: '名字', search: true },
    {
        prop: 'date',
        label: '日期',
        type: 'date',
        search: true,
        searchFiledType: 'DatePicker',
        searchFieldOptions: {
            placeholder: '请选择日期',
            valueFormat: 'x',
            type: 'daterange',
            'start-placeholder': 'Start Date',
            'end-placeholder': 'End Date'
        }
    },
    { prop: 'address', label: '地址', showOverflowTooltip: true, search: true },
    {
        width: '180',
        label: '操作',
        buttons: [
            { name: '编辑', type: 'success', command: 'edit' },
            { name: '删除', type: 'danger', command: 'delete' }
        ]
    }
]
const handleSearch = (params: Record<string, any>) => {
    EasyMessage.success(JSON.stringify(params))
}
</script>
<template>
    <div class="p-5">
        <el-card>
            <template #header>开启表格搜索</template>
            <easy-table
                :columns="tableColumn"
                :table-data="tableData"
                :options="{ showSearch: true }"
                @search="handleSearch" />
        </el-card>
    </div>
</template>
<style lang="scss" scoped></style>
