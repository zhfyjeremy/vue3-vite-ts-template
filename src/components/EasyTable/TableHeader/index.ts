import { Edit } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
import { Slots, renderSlot } from 'vue'

// 渲染默认标题
const renderDefaultTitle = (column: any, col: Table.Column) => h('div', { class: 'inline-flex items-center' }, [
    h('span', column.label),
    col.editable && h(ElIcon, { class: 'ml-1', size: 16 }, () => h(Edit))
])
type Params = {
    col: Table.Column,
    column: any,
    index: number,
    slots: Slots
}
export const renderCunstomHeader = ({ col, column, index, slots }: Params) => {
    // 插槽方式自定义表头
    if (col.headerSlot) {
        return h('span', renderSlot(slots, col.headerSlot, { column, index }))
    }
    // render函数自定义表头
    return col?.headerRender?.({ column, index }) || renderDefaultTitle(column, col as Table.Column)
}
