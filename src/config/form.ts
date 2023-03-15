
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
export const exampleForm:Record<string, Form.FieldItem[]> = {
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
}

