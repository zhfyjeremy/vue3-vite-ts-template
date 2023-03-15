<template>
    <div class="p-5">
        <el-card class="mb-5">
            <template #header> 基本表单 </template>
            <easy-form :fieldList="fieldList" :options="{ labelWidth: 100 }" :model="model" @submit="handleBaseSubmit">
                <!-- 如果不使用默认的按钮可以使用插槽自定义内容， 插槽返回的model就是当前表单的数据 -->
                <!-- <template #buttons="{ model }">
                    <el-button">提交</el-button>
                </template> -->
            </easy-form>
        </el-card>
        <el-card class="mb-5">
            <template #header> 自定义key </template>
            <easy-form
                :fieldList="customKeyFieldList"
                :model="model2"
                :options="{ labelWidth: 100 }"
                @submit="handleBaseSubmit" />
        </el-card>
        <el-card class="mb-5">
            <template #header> 自定义验证的表单 （使用slot自定义按钮） </template>
            <easy-form :fieldList="ruleFieldList" :options="{ labelWidth: 100 }">
                <!-- 如果不使用默认的按钮可以使用插槽自定义内容， 插槽返回的model就是当前表单的数据， formRef是当前表单的FormInstance -->
                <template #buttons="{ model, formRef }">
                    <el-button @click="handleSubmit(model, formRef)">保存</el-button>
                </template>
            </easy-form>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { exampleForm } from '@/config/form'
import type { FormInstance } from 'element-plus'
import { EasyMessage } from '@/components/EasyMessage'
const fieldList: Form.FieldItem[] = exampleForm.base
const customKeyFieldList: Form.FieldItem[] = exampleForm.customkeyForm
const ruleFieldList: Form.FieldItem[] = exampleForm.ruleForm
const model = ref<Record<string, any>>({
    name: '张三',
    gender: 1,
    hobbies: [1],
    job: 3,
    readonly: '只读输入框',
    summary: '尤雨溪懂个锤子vue是什么梗'
})
/**
 * 注意： model数据模型非必填项，如果仅仅是用于数据收集，model参数可以不用填，表单的submit事件会返回所有搜集的数据对象
 *       如果是编辑的情况下，页面需要回显数据，则model数据模型必须要填写
 */

const model2 = ref<Record<string, any>>({
    name: '自定义key',
    gender: 1
})
/**
     * 注意： 如果使用到checkbox，radio，或者select等组件，需要传入组件额外需要的数据，本组件默认设定的读取数据的字段是 label， value
     *       可参考下方声明文件 FiledItem options的参数类型描述
     *       比如，当前传入的data数据字段名和label、value不匹配，可使用预留的参数 labelkey, valueKey指定字段名
     *         customkeyForm: [
                    { label: '标题', field: 'name' },
                    { label: '性别', field: 'gender', type: 'radio', options: { labelkey: 'title', valueKey: 'val', data: [{ title: '男', val: 1 }, { title: '女', val: 0 }] } },
                ],
     */
const handleBaseSubmit = (model: Record<string, any>) => {
    console.log(model)
    EasyMessage.error('演示模式，不做保存')
}

/**
 *  如果用到了表单验证，又使用slot自定义按钮的话，需要自行实现验证逻辑
 *  组件内部已经集成验证，及重置逻辑。表单验证建议使用内置的提交按钮。当通过验证规则，内置提交按钮才会出发submit事件
 */
// 下方是使用slot自定义按钮，需要自己实现验证逻辑
const handleSubmit = (model: any, formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!', model)
            EasyMessage.success('自定义验证表单')
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>
<style lang="scss" scoped></style>
