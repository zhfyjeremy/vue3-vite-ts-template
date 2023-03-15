## 基本使用和参数介绍

```html
<template>
    <el-card class="mb-5">
        <template #header> 基本表单 </template>
        <easy-form :fieldList="fieldList" :model="model" @submit="handleBaseSubmit">
            <!-- 如果不使用默认的按钮可以使用插槽自定义内容， 插槽返回的model就是当前表单的数据 -->
            <!-- <template #buttons="{ model }">
                    <el-button">提交</el-button>
                </template> -->
        </easy-form>
    </el-card>
</template>
<script lang="ts" setup>
    import { exampleForm } from '@/config/form'
    // import { ref } from 'vue'
    // import EasyForm from '@/components/EasyForm/index.vue'
    // 本项目EasyForm组件自动引入，如复制此代码，需根据路径引入Form组件后使用
    const fieldList: Form.FieldItem[] = exampleForm.base
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
    const handleBaseSubmit = (model: Record<string, any>) => {
        console.log(model)
    }
</script>
<style lang="scss" scoped></style>
```

### 3. 自定义 key

`src/views/form/index.vue`

```html
<template>
    <el-card class="mb-5">
        <template #header> 自定义key </template>
        <easy-form :fieldList="customKeyFieldList" :model="model2" />
    </el-card>
</template>
<script lang="ts" setup>
    import { exampleForm } from '@/config/form'
    // import { ref } from 'vue'
    // import EasyForm from '@/components/EasyForm/index.vue'
    // 本项目EasyForm组件自动引入，如复制此代码，需根据路径引入Form组件后使用
    const customKeyFieldList: Form.FieldItem[] = exampleForm.customkeyForm
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
    }
</script>
<style lang="scss" scoped></style>
```

### 4. 自定义表单验证

`src/views/form/index.vue`

```html
<template>
    <el-card class="mb-5">
        <template #header> 自定义验证的表单 （使用slot自定义按钮） </template>
        <easy-form :fieldList="ruleFieldList">
            <!-- 如果不使用默认的按钮可以使用插槽自定义内容， 插槽返回的model就是当前表单的数据， formRef是当前表单的FormInstance -->
            <template #buttons="{ model, formRef }">
                <el-button @click="handleSubmit(model, formRef)">保存</el-button>
            </template>
        </easy-form>
    </el-card>
</template>
<script lang="ts" setup>
    import type { FormInstance } from 'element-plus'
    import { exampleForm } from '@/config/form'
    // import EasyForm from '@/components/EasyForm/index.vue'
    // 本项目EasyForm组件自动引入，如复制此代码，需根据路径引入Form组件后使用
    const ruleFieldList: Form.FieldItem[] = exampleForm.ruleForm
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
            } else {
                console.log('error submit!')
                return false
            }
        })
    }
</script>
<style lang="scss" scoped></style>
```

`src/config/form.ts` 表单配置项， 参数请参考下面参数介绍

```javascript
// 自定义验证邮箱方法
const checkEmail = (rule: any, value: any, callback: any) => {
    if (!value) callback(new Error('Please input the email'))
    const regExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(com|cn|net)$/
    regExp.test(value) ? callback() : callback(new Error('Please input the correct email address'))
}
// // 自定义验证表单配置数据
// export const validationFormFieldList = [
//     { label: '姓名', field: 'name', rules: [{ required: true, message: 'name is required' }] },
//     { label: '邮箱', field: 'email', rules: [{ required: true, validator: checkEmail }] },
// ] as Form.FieldItem[]

// 表单配置示例
export const exampleForm = {
    base: [
        { label: '姓名', field: 'name', disabled: true },
        { label: '性别', field: 'gender', type: 'radio', options: { data: [{ label: '男', value: 1 }, { label: '女', value: 0 }] } },
        { label: '爱好', field: 'hobbies', type: 'checkbox', options: { data: [{ label: '吃饭', value: 1 }, { label: '睡觉', value: 2 }, { label: '写代码', value: 3 }] } },
        { label: '工作', field: 'job', type: 'select', options: { data: [{ label: '吃饭', value: 1 }, { label: '睡觉', value: 2 }, { label: '写代码', value: 3 }] } },
        { label: '密码', field: 'password', type: 'password', placeholder: '这是一个密码输入框' },
        { label: '只读', field: 'readonly', readonly: true, placeholder: '这是一个只读输入框' },
        { label: '留言板', field: 'summary', type: 'textarea', placeholder: '留言板' },
    ],
    customkeyForm: [
        { label: '标题', field: 'name' },
        { label: '性别', field: 'gender', type: 'radio', options: { labelkey: 'title', valueKey: 'val', data: [{ title: '男', val: 1 }, { title: '女', val: 0 }] } },
    ],
    ruleForm: [
        { label: '姓名', field: 'name', rules: [{ required: true, message: 'name is required' }] },
        { label: '邮箱', field: 'email', rules: [{ required: true, validator: checkEmail }] },
    ]
} as Record<string, Form.FieldItem[]>
```

`src/types/form/index.d.ts` 参数类型声明(声明为全局的类型，方便使用)

```javascript
declare namespace Form {
     type ItemType = 'password' | 'text'|'textarea' | 'radio' | 'checkbox' | 'select'
    // 当FiledItem的type === 'radio' | 'checkbox'时，options的参数类型
    interface IFieldOptions {
        labelkey?: string,
        valueKey?: string,
        placeholder?: string,
        data: Recode<string, any>[]
    }
    interface Options {
        labelWidth?: string | number,
        labelPosition?: 'left' | 'right' | 'top',
        disabled?: boolean,
        size?: 'large' | 'small' | 'default',
        showResetButton?: boolean, // 是否展示重置按钮
        showCancelButton?: boolean, // 是否展示取消按钮
        submitButtonText?: string,
        resetButtonText?: string,
        cancelButtonText?: string
    }
    interface FieldItem {
        label?: string,
        labelWidth?: string | number, // 标签宽度，例如 '50px'。 可以使用 auto。
        field: string,
        type?: ItemType,
        value?: any,
        placeholder?: string,
        disabled?: boolean,
        readonly?: boolean,
        options?: IFieldOptions,
        rules?: import('element-plus').FormItemRule[]
        clearable?: boolean // 是否可清空
        showPassword?: boolean, // 是否显示切换密码图标
        enterable?: boolean, // 当为输入框时，是否启用回车触发提交功能
    }
}


```

## 参数介绍

#### Form 属性

| 参数      | 说明              | 类型                | 是否必填 | 默认值 |
| :-------- | :---------------- | :------------------ | -------- | ------ |
| model     | 表单数据对象      | Record<string, any> | 否       | —      |
| options   | 自定义配置        | object              | 否       | —      |
| fieldList | formItem 配置数组 | Array\<object>      | 是       | —      |

#### Options 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| labelWidth | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。 | string / number | 否 | — |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | 'left' / 'right' / 'top' | 否 | 'right' |
| size | 用于控制该表单内组件的尺寸 | large / default /small | 否 | — |
| disabled | 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性。 | boolean | 否 | false |
| submitButtonText | 提交按钮默认显示的文本内容 | string | 否 | '提交' |
| resetButtonText | 重置按钮默认显示的文本内容 | string | 否 | '重置' |
| cancelButtonText | 取消按钮默认显示的文本内容 | string | 否 | '取消' |
| showResetButton | 是否显示重置按钮 | boolean | 否 | — |
| showCancelButton | 是否显示取消按钮 | boolean | 否 | — |

#### fieldItem 配置项

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| field | model 的键名 | string | 是 | — |
| label | 标签文本 | string | 是 | — |
| type | 当前 fieldItem 的类型 | 'password' / 'text' / 'textarea' / 'radio' / 'checkbox' / 'select' | 否 | 'text' |
| value | 默认显示的值 | any | 否 | — |
| placeholder | 输入框占位文本 | string | 否 | — |
| disabled | 是否禁用 | boolean | 否 | false |
| options | 如果 type='checkbox' / 'radio' / 'select'时，需传入此配置项。格式参考 fieldItem options 配置项 | object | 否 | - |
| rules | 表单验证规则。格式参考[element-plus form 表单](https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95-api) 或者参数类型声明 | Array\<RuleItem> | 否 | - |
| clearable | 是否可清空 | boolean | 否 | false |
| showPassword | 是否显示切换密码图标 | boolean | 否 | false |
| enterable | 当为输入框时，是否启用回车触发提交功能 | boolean | 否 | false |

#### fieldItem options 配置项

| 参数        | 说明                                               | 类型           | 是否必填 | 默认值  |
| :---------- | :------------------------------------------------- | :------------- | -------- | ------- |
| labelkey    | label 自定义字段名                                 | string         | 否       | 'label' |
| value       | value 自定义字段名                                 | string         | 否       | 'value' |
| placeholder | 当 fieldItem type= 'select'时，选择框的提示语      | string         | 否       | -       |
| data        | type='checkbox' / 'radio' / 'select'时, 需要的数据 | Array\<object> | 否       | -       |

#### Form 插槽

| 插槽名  | 说明                 | 插槽作用域         |
| :------ | :------------------- | :----------------- |
| buttons | 自定义按钮区域的内容 | { model, formRef } |

#### Form 事件

| 事件名 | 说明                                             | 回调参数 |
| :----- | :----------------------------------------------- | :------- |
| submit | 点击默认的提交按钮触发                           | model    |
| cancel | 点击取消按钮触发                                 | -        |
| reset  | 重置该表单项，将其值重置为初始值，并移除校验结果 | -        |

## 其他

此文档只提供基本的封装思路，如需使用到更多的业务场景，可自行扩展。  
FiledItem type 类型可增加 富文本编辑器、 markdown 编辑器， 上传图片等类型，  
然后根据类型判断把封装好的[富文本编辑器组件](https://blog.csdn.net/weixin_45291937/article/details/125078730)、[markdown 编辑器组件](https://blog.csdn.net/weixin_45291937/article/details/125218873)放入表单内。
