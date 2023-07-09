<script lang="ts" setup>
import { EasyMessage } from '@/components/EasyMessage'
import { ElProgress } from 'element-plus'
import dayjs from 'dayjs'
import { isEmpty } from 'lodash'
type ITalbeDataItem = {
    name1: string
    name2: string
    name3: string
    value: boolean
    value2: number
    sex: number
    date: number
    time: number
}
const tableData: ITalbeDataItem[] = [
    {
        name1: '张三',
        name2: '张三2',
        name3: '张三3',
        value: true,
        value2: 25,
        sex: 1,
        date: 1660737564000,
        time: 1660737564000
    },
    {
        name1: '李四',
        name2: '李四2',
        name3: '李四3',
        value: false,
        value2: 88,
        sex: 0,
        date: 1462032000000,
        time: dayjs().valueOf()
    }
]
const sexData = [
    { label: '男', value: 1 },
    { label: '女', value: 0 }
]
const tableColumns: Table.Column<ITalbeDataItem>[] = [
    { prop: 'name1', label: '输入框', editable: true, align: 'center', width: '200px' },
    { prop: 'name2', label: '可校验输入框', editable: true, editRule: true, width: '200px' },
    {
        prop: 'name3',
        label: '函数校验输入框',
        editable: true,
        width: '200px',
        editRule: (value, callback) => {
            if (!value) {
                callback(new Error('输入不能为空,试试输入“1”'))
            } else if (value === '1') {
                callback(new Error('不能输入1，😊'))
            } else {
                callback()
            }
        }
    },
    {
        prop: 'sex',
        label: '下拉框',
        editable: true,
        editRule: true,
        width: '200px',
        editValueFormat: ({ value }) => h('span', value === 1 ? '男' : '女'),
        editOptions: {
            componentType: 'Select',
            data: sexData,
            clearable: true,
            placeholder: '请选择'
        }
    },
    {
        prop: 'value',
        label: '开关',
        editable: true,
        width: '200px',
        editValueFormat: ({ value }) => (value ? '开' : '关'),
        editOptions: {
            componentType: 'Switch'
        }
    },
    {
        prop: 'value2',
        label: '数字输入框',
        editable: true,
        width: '200px',
        editValueFormat: ({ value }) => h(ElProgress, { percentage: value }),
        editOptions: {
            componentType: 'InputNumber',
            min: 0,
            max: 100
        }
    },
    {
        prop: 'date',
        label: '日期选择',
        editable: true,
        editRule: true,
        width: '220px',
        editValueFormat: ({ value }) => dayjs(value).format('YYYY-MM-DD'),
        editOptions: {
            componentType: 'DatePicker',
            format: 'YYYY-MM-DD',
            valueFormat: 'x',
            placeholder: '请选择'
        }
    },
    {
        prop: 'time',
        label: '时间选择',
        editable: true,
        width: '220px',
        editValueFormat: ({ value }) => dayjs(value).format('HH:mm'),
        editOptions: {
            componentType: 'TimePicker',
            format: 'HH:mm',
            valueFormat: 'x',
            placeholder: '请选择'
        }
    }
]
/**
 * 保存前的钩子
 * @param value row key index value 是当前更新的数据 row 当前编辑行的数据 key 当前编辑行的key index 当前编辑行的index
 * 可以在此处写一些逻辑，比如保存前请求api，保存更新的数据
 */
const beforeEditSubmit = ({ row, value }: Table.BeforeEditSubmitParams<ITalbeDataItem>): Promise<boolean> => {
    console.log('当前编辑行的数据准备提交', row)
    EasyMessage.loading('正在保存，请稍后...')
    return new Promise((resolve) => {
        setTimeout(() => {
            if (isEmpty(value.toString())) {
                EasyMessage.error('保存内容不能为空')
                resolve(false)
            } else {
                EasyMessage.success('保存成功')
                resolve(true)
            }
        }, 2000)
    })
}
// 编辑取消以后执行的事件
const handleEditCancel = ({ key }: Table.BeforeEditSubmitParams) => {
    console.log(`取消编辑了【${key}】`)
}
// 编辑完成以后执行的事件
const handleEditend = ({ key }: Table.BeforeEditSubmitParams) => {
    console.log(`成功编辑了【${key}】`)
}
</script>
<template>
    <el-card>
        <template #header>
            <span>可编辑单元格</span>
        </template>
        <EasyTable
            :columns="tableColumns"
            :table-data="tableData"
            :options="{ beforeEditSubmit }"
            @edit-cancel="handleEditCancel"
            @edit-end="handleEditend" />
    </el-card>
</template>
<style lang="scss" scoped></style>
