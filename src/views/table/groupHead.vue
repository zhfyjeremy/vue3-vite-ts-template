<script lang="ts" setup>
import { ElTag } from 'element-plus'

interface ITableData {
    date: string
    name: string
    state: string
    city: string
    address: string
    zip: string
}
const tableData2: ITableData[] = [
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
// 多级表头配置
const tableColumns: Table.Column<ITableData>[] = [
    {
        label: 'Date',
        prop: 'date',
        width: '220',
        headerRender: ({ column }) => h(ElTag, { type: 'danger' }, () => `${column.label}(渲染函数自定义表头)`)
    },
    {
        label: 'Delivery Info',
        headerSlot: 'deliveryHeader',
        children: [
            { label: 'Name', prop: 'name', width: '120' },
            {
                label: 'Address Info',
                headerRender: ({ column }) =>
                    h(ElTag, { type: 'success' }, () => `${column.label}(渲染函数自定义表头)`),
                children: [
                    { label: 'State', prop: 'state', width: '240', headerSlot: 'stateHeader' },
                    { label: 'City', prop: 'city', width: '120' },
                    {
                        label: 'Address',
                        prop: 'address',
                        headerRender: ({ column }) =>
                            h(ElTag, { type: 'warning' }, () => `${column.label}(渲染函数自定义表头)`)
                    },
                    { label: 'Zip', width: '120', render: ({ row }) => h(ElTag, { type: 'success' }, () => row.zip) }
                ]
            }
        ]
    }
]
</script>
<template>
    <!-- 多级表头 -->
    <el-card class="mb-5">
        <template #header>多级表头</template>
        <EasyTable :columns="tableColumns" :table-data="tableData2">
            <!-- 插槽自定义表头 -->
            <template #deliveryHeader="{ column }: any">
                <p class="bg-red-400 text-white">{{ column.label }}(插槽自定义表头)</p>
            </template>
            <template #stateHeader="{ column }">
                <p class="bg-green-400 text-white">{{ column.label }}(插槽自定义表头)</p>
            </template>
        </EasyTable>
    </el-card>
</template>
<style lang="scss" scoped></style>
