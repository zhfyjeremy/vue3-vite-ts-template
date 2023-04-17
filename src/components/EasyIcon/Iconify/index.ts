import { Icon } from '@iconify/vue'
export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: [String, Number],
            default: 16
        }
    },
    setup(prop) {
        const style = {
            width: parseInt(prop.size.toString()),
            height: parseInt(prop.size.toString()),
        }
        return () => h(Icon, {
            icon: prop.icon,
            color: prop.color,
            style,
            class: 'inline'
        })
    }
})
