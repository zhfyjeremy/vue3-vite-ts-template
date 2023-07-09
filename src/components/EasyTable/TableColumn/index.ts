import { PropType } from 'vue'
import { ElTableColumn, type TableProps } from 'element-plus'
import { useRenderHelper } from './render-helper'
import { renderCunstomHeader } from '../TableHeader'
export type Params = {row: any, col: Table.Column, $index: number}
export type HeaderParams = {column: any, $index: number}
export default defineComponent({
    props: {
        col: Object as PropType<Table.Column>
    },
    setup(props, { slots }) {
        const { renderColumn } = useRenderHelper(slots)
        const attr = (col: Table.Column) => (col.children?.length ? { label: col.label, width: col.width, align: col.align } : col) as TableProps<any>
        const renderViewColumn = (col: Table.Column) => h(ElTableColumn, attr(col), {
            default: ({ row, $index }: Params) => {
                // 如果有配置嵌套数据，则递归该组件， 生成多级表头
                if (col.children?.length) {
                    return col.children.map(item => renderViewColumn(item))
                }
                return renderColumn({ row, col, $index })
            },
            // 自定义表头
            header: ({ column, $index }: HeaderParams) => renderCunstomHeader({ col, column, index: $index, slots })
        })
        return () => renderViewColumn(props.col as Table.Column)
    }
})
