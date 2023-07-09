import type { PropType, Component } from 'vue'
import { componentMap } from './componentMap'
import { ElTooltip } from 'element-plus'
const props = {
    ruleMessage: String,
    ruleVisible: Boolean,
    rule: [Boolean, Function] as PropType<Table.EditRule>,
    fieldType: String as PropType<Table.ComponentType>
}
export default defineComponent({
    props,
    setup(props, { attrs }) {
        const Component = componentMap.get(props.fieldType || 'Input') as Component
        if (!props.rule) {
            return () => h(Component, attrs)
        }
        return () =>
            h(
                ElTooltip,
                { effect: 'light', placement: 'top', visible: props.ruleVisible },
                {
                    default: () => h('div', h(Component, attrs)),
                    content: () => h('span', { class: 'text-red-500' }, props.ruleMessage)
                }
            )
    }
})
