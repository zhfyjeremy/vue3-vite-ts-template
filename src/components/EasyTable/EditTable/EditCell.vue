<script lang="ts" setup>
import { isFunction, isBoolean, isString } from '@/utils/is'
import { isEmpty, set } from 'lodash'
import { useTableContext } from '../useTableContext'
import CellComponent from '../CellComponent'
import type { PropsModel } from './index'
import { Table } from 'element-plus'
// type PropsModel = {
//     row: any
//     col: Table.Column
//     index: number
// }
// 注意  vue3.3以后的版本才支持类型导入 （定义 defineProps 使用到的 PropsModel 是通过外部引入的）
const props = defineProps<PropsModel>()
const isEdit = ref(false) // 是否编辑
const key = props.col.prop as string // 当前编辑的key
const defaultValue = ref(props.row[key]) // 单元格默认的值
const currentValue = ref(props.row[key]) // 单元格当前的值
const isLoading = ref(false) // 提交编辑时的loading
const ruleVisible = ref(false) // 校验失败错误提示气泡框
const ruleMessage = ref('') // 校验错误提示信息
const elRef = ref()
const easyTable = useTableContext()

const getValues = computed(() => {
    const { editValueFormat } = props.col
    if (editValueFormat && isFunction(editValueFormat)) {
        const value = editValueFormat({ value: props.row[key] })
        if (isString(value)) {
            return h('span', value)
        }
        return value
    }
    return h('span', props.row[key])
})
watchEffect(() => {
    defaultValue.value = props.row[key]
    currentValue.value = props.row[key]
})
// 输入框配置信息
const editOptions = computed(() => ({
    placeholder: '请输入',
    componentType: 'Input',
    ...props.col.editOptions
}))

// 开始编辑
const handleEdit = async () => {
    isEdit.value = true
    if (editOptions.value.componentType === 'Input') {
        await nextTick()
        const el = unref(elRef)?.$el?.querySelector?.('input')
        el?.focus?.()
    }
}
// 取消编辑
const handleCancel = () => {
    set(props.row, key, defaultValue.value)
    currentValue.value = defaultValue.value
    ruleVisible.value = false
    isEdit.value = false
    // 触发取消编辑事件
    easyTable.emit('edit-cancel', {
        row: props.row,
        key,
        value: currentValue,
        index: props.index
    })
}
// 提交前的规则校验
const submitRule = async () => {
    const editRule = props.col.editRule
    if (editRule) {
        // 布尔值 是否开启校验
        if (isBoolean(editRule)) {
            ruleVisible.value = editRule && isEmpty(currentValue.value.toString())
            ruleMessage.value = editOptions.value.placeholder || '请输入'
            return !ruleVisible.value
        }
        // 自定义函数校验
        if (isFunction(editRule)) {
            let flag = false
            await editRule(currentValue.value, (res: any) => {
                if (res === undefined) {
                    ruleVisible.value = false
                    flag = true
                    return true
                }
                ruleMessage.value = res.message
                ruleVisible.value = true
                flag = false
            })
            return flag
        }
    }
    return true
}
// 输入改变触发验证
const handleChange = () => {
    submitRule()
}
// 提交保存
const handleSubmit = async () => {
    const isPass = await submitRule()
    if (!isPass) return
    const { beforeEditSubmit } = easyTable.options
    if (beforeEditSubmit) {
        isLoading.value = true
        let result = true
        try {
            props.row
            result = await beforeEditSubmit({
                row: props.row,
                key,
                value: currentValue.value,
                index: props.index
            })
        } catch (e) {
            result = false
        } finally {
            isLoading.value = false
        }
        if (result === false) {
            return
        }
    }
    set(props.row, key, currentValue.value)
    isEdit.value = false
    // 触发编辑完成事件
    easyTable.emit('edit-end', {
        row: props.row,
        key,
        value: currentValue,
        index: props.index
    })
}
</script>
<template>
    <ClickOutside :disabled="!editOptions.componentType.includes('Input')" @click-outside="handleCancel" v-if="isEdit">
        <div class="flex items-center" v-loading="isLoading" element-loading-background="rgba(255, 255, 255, 0.8)">
            <CellComponent
                v-model="currentValue"
                v-bind="editOptions"
                ref="elRef"
                :fieldType="(editOptions.componentType as Table.ComponentType)"
                :rule-message="ruleMessage"
                :rule="col.editRule"
                :ruleVisible="ruleVisible"
                size="small"
                @input="handleChange"
                @change="handleChange"
                @keydown.enter="handleSubmit" />
            <div class="flex items-center ml-2">
                <easy-icon
                    icon="ep:check"
                    class="ml-1 cursor-pointer hover:text-primary-default"
                    :size="18"
                    @click="handleSubmit" />
                <easy-icon
                    icon="ep:close"
                    class="ml-1 cursor-pointer hover:text-primary-default"
                    :size="18"
                    @click="handleCancel" />
            </div>
        </div>
    </ClickOutside>
    <div v-else class="edit-cell" @click="handleEdit">
        <component :is="getValues" :value="row[key]" />
        <easy-icon icon="ep:edit" class="edit" :size="16" />
    </div>
</template>
<style lang="scss" scoped>
:deep(.circular) {
    width: 20px;
}
:deep(.el-date-editor) {
    width: v-bind('props.col.width') - 60px;
}
.edit-cell {
    position: relative;
    .edit {
        @apply cursor-pointer hidden hover:text-primary-default absolute right-0 top-[50%] translate-y-[-50%];
    }
    &:hover {
        .edit {
            display: block;
        }
    }
}
</style>
