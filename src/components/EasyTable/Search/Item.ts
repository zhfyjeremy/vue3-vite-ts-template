import { PropType } from 'vue'
import CellComponent from '../CellComponent'
export default defineComponent({
    props: {
        modelValue: [String, Number, Object, Array] as PropType<any>,
        col: Object as PropType<Table.Column>
    },
    emits: ['update:modelValue'],
    setup(prop, { emit }) {
        // 输入框配置信息
        const searchOptions = computed(() => ({
            placeholder: '请输入', // 默认提示语
            fieldType: prop.col?.searchFiledType || 'Input', // 如果未传入搜索类型，默认设置为Input类型
            clearable: true, // 默认是可清空输入框
            ...prop.col?.searchFieldOptions // 搜索额外的参数
        }))
        return () => h(CellComponent, { ...searchOptions.value,
            modelValue: prop.modelValue,
            'onUpdate:modelValue': (value: any) => emit('update:modelValue', value) })
    }
})
