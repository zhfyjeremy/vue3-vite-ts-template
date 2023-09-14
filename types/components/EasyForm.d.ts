import { type FormItemRule } from 'element-plus'
export = Form
export as namespace Form
declare namespace Form {
    type ItemType = 'password' | 'text' | 'textarea' | 'radio' | 'checkbox' | 'select'
    // 当FiledItem的type === 'radio' | 'checkbox'时的需要的参数类型
    interface IFieldOptions {
        labelkey?: string
        valueKey?: string
        placeholder?: string
        data: Record<string, any>[]
    }
    interface Options {
        labelWidth?: string | number
        labelPosition?: 'left' | 'right' | 'top'
        disabled?: boolean
        size?: 'large' | 'small' | 'default'
        showResetButton?: boolean // 是否展示重置按钮
        showCancelButton?: boolean // 是否展示取消按钮
        submitButtonText?: string
        resetButtonText?: string
        cancelButtonText?: string
        blockSubmitButton?: boolean // 提交按钮是否以块级按钮呈现
    }
    interface FieldItem {
        label?: string
        labelWidth?: string | number // 标签宽度，例如 '50px'。 可以使用 auto。
        field: string
        type?: ItemType
        value?: any
        placeholder?: string
        disabled?: boolean
        readonly?: boolean
        options?: IFieldOptions
        rules?: import('element-plus').FormItemRule[]
        clearable?: boolean // 是否可清空
        showPassword?: boolean // 是否显示切换密码图标
        enterable?: boolean // 当为输入框时，是否启用回车触发提交功能
    }
}
