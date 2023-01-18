<template>
    <div class="p-5">
        <el-card class="mb-5">
            <template #header>
                <div class="card-header">
                    vue3 ts element plus
                    table表格二次封装详细步骤。支持单元格内容、表头自定义渲染（支持使用作用域插槽、tsx 语法、h 函数）
                </div>
            </template>
            <div class="mb-5">
                <el-link
                    type="primary"
                    href="https://blog.csdn.net/weixin_45291937/article/details/125523244"
                    target="_blank">
                    可参考CSDN中的参数介绍
                </el-link>
            </div>
            <p class="text-sm text-gray-500">可参考 @/components/table/doc.md 中的参数介绍</p>
        </el-card>
        <!-- 基本表格 -->
        <el-card class="mb-5">
            <template #header>
                <div class="card-header">
                    <span>基本表格</span>
                </div>
            </template>
            <easy-table ref="easyTableRef" :columns="tableColumn" :table-data="tableData">
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
            <easy-table
                :columns="tableColumn3"
                :table-data="tableData"
                @selection-change="handleSelection2"
                @command="handleAction">
                <template #date="{ row }">
                    <span> {{ row.date }}</span>
                </template>
                <!-- 插槽自定义表头 -->
                <template #addressHeader="{ column }: any">
                    <span>{{ column.label }}(插槽自定义表头)</span>
                </template>
            </easy-table>
        </el-card>
        <!-- 多级表头 -->
        <el-card>
            <template #header>多级表头</template>
            <EasyTable :columns="tableColumns2" :table-data="tableData2" />
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { ElButton, ElTable, ElTag } from 'element-plus'
import { EasyMessage } from '@/components/EasyMessage'
import dayjs from 'dayjs'
interface IUser {
    date: number
    name: string
    address: string
}
// 表格数据
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
// 基本表格配置
const tableColumn: Table.Column[] = [
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
// 多级表头配置
const tableColumns2: Table.Column[] = [
    { label: 'Data', prop: 'date', width: '150' },
    {
        label: 'Delivery Info',
        children: [
            { label: 'Name', prop: 'name', width: '120' },
            {
                label: 'Address Info',
                children: [
                    { label: 'State', prop: 'state', width: '120' },
                    { label: 'City', prop: 'city', width: '120' },
                    { label: 'Address', prop: 'address' },
                    { label: 'Zip', width: '120', render: ({ row }) => h(ElTag, { type: 'success' }, () => row.zip) }
                ]
            }
        ]
    }
]
const tableData2 = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
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

const handleSelection2 = (val: IUser[]) => {
    console.log('父组件接收的多选数据', val)
}
const handleRenderEdit = (row: IUser, index: number) => {
    EasyMessage.success(`${row.name} ----- ${index}`)
}
const handleRenderDelete = (row: IUser, index: number) => {
    EasyMessage.error(`${row.name} ----- ${index}`)
}
const handleAction = (command: Table.Command, row: IUser) => {
    switch (command) {
        case 'edit':
            EasyMessage.success(`编辑 ${row.name}`)
            break
        case 'delete':
            ElMessageBox.confirm('确认删除吗？', '提示').then(() => {
                EasyMessage.info(row.name)
            })
            break
        default:
            break
    }
}
</script>
<style lang="scss" scoped></style>
