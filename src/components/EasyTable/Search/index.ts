/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ElForm, ElFormItem, ElButton, type FormInstance } from 'element-plus'
import { PropType } from 'vue'
import FormItem from './Item'
import { Search, Refresh } from '@element-plus/icons-vue'
export default defineComponent({
    props: {
        columns: Array as PropType<Table.Column[]>
    },
    emits: ['search', 'update:modelValue'],
    setup(props, { emit }) {
        const searchForm = ref<FormInstance>()
        const model = ref<Record<string, any>>({})
        // 如果配置项searchFieldOption中有设置回显的value,需给model对象设置指定字段的默认值
        props.columns?.map((item: Table.Column) => {
            if (!item.search) return
            if (item.searchFieldOptions?.value) {
                model.value[item.prop as string] = item.searchFieldOptions?.value
            }
        })
        const renderFormItem = () =>
            props.columns?.map(item => {
                if (!item.search) return ''
                return h(
                    ElFormItem,
                    { label: item.label, prop: item.prop as string },
                    () => h(FormItem,
                        {
                            col: item,
                            modelValue: model.value[item.prop as string],
                            'onUpdate:modelValue': (value: any) => {
                                model.value[item.prop as string] = value
                            }
                        }
                    )
                )
            })

        const renderButton = () => h(ElFormItem, () => [
            h(ElButton, { type: 'primary', icon: Search, onClick: () => emit('search', model.value) }, () => '搜索'),
            h(ElButton, {
                icon: Refresh,
                onClick: () => searchForm.value?.resetFields()
            }, () => '重置')
        ])
        return () => h(ElForm, { ref: searchForm, inline: true, model: model.value }, () => [
            renderFormItem(),
            renderButton()
        ])
    },
})
