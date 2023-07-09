import { PropType } from 'vue'
import EditCell from './EditCell.vue'
export type PropsModel = {
    row: any
    col: Table.Column
    index: number
}
export default defineComponent({
    props: {
        row: Object as PropType<any>,
        col: Object as PropType<Table.Column>,
        index: Number
    },
    setup(props) {
        return () => h(EditCell, props as PropsModel)
    }
})
