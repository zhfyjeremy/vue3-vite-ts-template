<script lang="ts" setup>
import { ElButton, ElTable, ElTag } from 'element-plus'
import { EasyMessage } from '@/components/EasyMessage'
import dayjs from 'dayjs'

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
// 基本表格配置
const tableColumn: Table.Column<IUser>[] = [
    { type: 'selection', width: '50' },
    { type: 'index', width: '50', label: 'No.' },
    { prop: 'name', label: '名字' },
    { type: 'date', prop: 'date', label: '日期' },
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
const easyTableRef = ref<InstanceType<typeof ElTable>>()
const handleSelection = (rows?: IUser[]) => {
    if (rows) {
        rows.forEach((row) => {
            // TODO: improvement typing when refactor table
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            easyTableRef.value.element?.toggleRowSelection(row, undefined)
        })
    } else {
        console.log(11)
    }
}
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
// render 函数渲染自定义列
const tableColumn3: Table.Column[] = [
    { type: 'selection', width: '50' },
    { type: 'index', width: '50', label: 'No.' },
    { prop: 'name', label: '名字' },
    {
        prop: 'date',
        label: '日期',
        headerRender: ({ column }) => h(ElTag, { type: 'danger' }, () => `${column.label}(渲染函数自定义表头)`),
        render: ({ row }) => h('span', dayjs(row.date).format('YYYY-MM-DD HH:mm'))
    },
    { prop: 'address', label: '地址', headerSlot: 'addressHeader', showOverflowTooltip: true },
    {
        width: '140',
        label: '操作',
        render: ({ row, index }) =>
            // 渲染单个元素
            //   h(
            //             ElButton,
            //             {
            //                 type: 'primary',
            //                 size: 'small',
            //                 onClick: () => handleRenderEdit(row, index)
            //             },
            //             { default: () => '编辑' }
            //         ),
            // 渲染多个元素
            h('div', null, [
                h(
                    ElButton,
                    {
                        type: 'primary',
                        size: 'small',
                        onClick: () => handleRenderEdit(row, index)
                    },
                    { default: () => '编辑' }
                ),
                h(
                    ElButton,
                    {
                        type: 'danger',
                        size: 'small',
                        onClick: () => handleRenderDelete(row, index)
                    },
                    { default: () => '删除' }
                )
            ])
    }
]
const handleRenderEdit = (row: IUser, index: number) => {
    EasyMessage.success(`${row.name} ----- ${index}`)
}
const handleRenderDelete = (row: IUser, index: number) => {
    EasyMessage.error(`${row.name} ----- ${index}`)
}
const handleSelection2 = (val: IUser[]) => {
    console.log('父组件接收的多选数据', val)
}
</script>
<template>
    <div>
        <!-- 基本表格 -->
        <el-card class="mb-5">
            <template #header>
                <div class="card-header">
                    <span>基本表格</span>
                </div>
            </template>
            <easy-table ref="easyTableRef" :columns="tableColumn" :table-data="tableData" @command="handleCommand">
                <template #address="{ row }">
                    <span>演示slot使用--->{{ row.address }}</span>
                </template>
            </easy-table>
            <el-button class="mt-5" @click="handleSelection([tableData[1], tableData[2]])">选中第二、三行</el-button>
        </el-card>
        <!-- Render函数自定义列 -->
        <el-card class="box-card mb-5">
            <template #header>
                <div class="card-header">
                    <span>Render函数自定义列、自定义表头</span>
                </div>
            </template>
            <easy-table :columns="tableColumn3" :table-data="tableData" @selection-change="handleSelection2">
                <template #date="{ row }">
                    <span> {{ row.date }}</span>
                </template>
                <!-- 插槽自定义表头 -->
                <template #addressHeader="{ column }">
                    <span>{{ column.label }}(插槽自定义表头)</span>
                </template>
            </easy-table>
        </el-card>
    </div>
</template>
<style lang="scss" scoped></style>
