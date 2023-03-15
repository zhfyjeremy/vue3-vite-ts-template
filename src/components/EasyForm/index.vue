<template>
    <el-form @submit.prevent :model="model" class="demo-form-inline" v-bind="_options" ref="formRef">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="(item, index) in fieldList" :key="index">
            <!-- 单选框 -->
            <el-form-item :label="item.label" v-if="item.type === 'radio'" :rules="item.rules" :prop="[item.field]">
                <el-radio-group v-model="model[item.field]" :disabled="item.disabled">
                    <el-radio
                        :label="val[item.options?.valueKey || 'value']"
                        size="large"
                        v-for="val in item.options?.data"
                        :key="val[item.options?.valueKey || 'value']">
                        {{ val[item.options?.labelkey || 'label'] }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 复选框 -->
            <el-form-item
                :label="item.label"
                v-else-if="item.type === 'checkbox'"
                :rules="item.rules"
                :prop="[item.field]">
                <el-checkbox-group v-model="model[item.field]" :disabled="item.disabled">
                    <el-checkbox
                        v-for="c in item.options?.data"
                        :key="c[item.options?.valueKey || 'value']"
                        :label="c[item.options?.valueKey || 'value']"
                        >{{ c[item.options?.labelkey || 'label'] }}</el-checkbox
                    >
                </el-checkbox-group>
            </el-form-item>
            <!-- 下拉框 -->
            <el-form-item
                :label="item.label"
                v-else-if="item.type === 'select'"
                :rules="item.rules"
                :prop="[item.field]">
                <!-- <EasySelect
                    v-model="model[item.field]"
                    clearable
                    :disabled="item.disabled"
                    :label-key="item.options?.labelkey"
                    :value-key="item.options?.valueKey"
                    :select-data="item.options?.data" /> -->
                <el-select
                    v-model="model[item.field]"
                    :clearable="item.clearable"
                    :placeholder="item.options?.placeholder || '请选择'">
                    <el-option
                        v-for="s in item.options?.data"
                        :key="s[item.options?.valueKey || 'value']"
                        :label="s[item.options?.labelkey || 'label']"
                        :value="s[item.options?.valueKey || 'value']" />
                </el-select>
            </el-form-item>
            <!-- 默认输入框 -->
            <el-form-item :label="item.label" :rules="item.rules" :prop="[item.field]" v-else>
                <el-input
                    v-model="model[item.field]"
                    :readonly="item.readonly"
                    :type="item.type ?? 'text'"
                    :showPassword="item.showPassword"
                    :clearable="item.clearable"
                    :placeholder="item.placeholder || item.label"
                    :disabled="item.disabled"
                    @keyup.enter="handleKeyUp(item.enterable)" />
            </el-form-item>
        </template>

        <el-form-item>
            <slot name="buttons" :model="model" :formRef="formRef">
                <el-button
                    :class="{ 'w-full': options?.blockSubmitButton }"
                    type="primary"
                    @click="onSubmit(formRef)"
                    >{{ _options.submitButtonText }}</el-button
                >
                <el-button v-if="_options.showResetButton" type="info" @click="resetForm(formRef)">
                    {{ _options.resetButtonText }}
                </el-button>
                <el-button v-if="_options.showCancelButton" @click="emit('cancel')">
                    {{ _options.cancelButtonText }}
                </el-button>
            </slot>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ComputedRef } from 'vue'
// 父组件传递的值
interface Props {
    fieldList: Form.FieldItem[]
    model?: Record<string, any>
    options?: Form.Options
}
// 表单的数据模型
const model = ref<Record<string, any>>({})
const formRef = ref<FormInstance>()
const props = defineProps<Props>()
// 设置option默认值，如果传入自定义的配置则合并option配置项
const _options: ComputedRef<Form.Options> = computed(() => {
    const option = {
        // labelWidth: 'auto',
        labelPosition: 'right',
        disabled: false,
        submitButtonText: '提交',
        resetButtonText: '重置',
        cancelButtonText: '取消'
    }
    return Object.assign(option, props?.options)
})
interface EmitEvent {
    (e: 'submit', params: any): void
    (e: 'reset'): void
    (e: 'cancel'): void
}
const emit = defineEmits<EmitEvent>()
defineExpose({
    formRef
})
// const model = ref<Record<string, any>>({})
// 根据fieldList初始化model， 如果model有传值就用传递的model数据模型，否则就给上面声明的model设置相应的(key,value) [item.field]， item.value是表单的默认值（选填）
props.fieldList.map((item: Form.FieldItem) => {
    // 如果类型为checkbox，默认值需要设置一个空数组
    const value = item.type === 'checkbox' ? [] : ''
    props.model ? (model.value = props.model) : (model.value[item.field] = item.value || value)
})

// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            emit('submit', model.value)
        } else {
            return false
        }
    })
}
// 输入框回车事件
const handleKeyUp = (enterable: boolean | undefined) => {
    if (!enterable) return
    onSubmit(formRef.value)
}
// 重置
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style lang="scss" scoped></style>
