import type { Params } from '.'
import dayjs from 'dayjs'
import { ElImage, ElButtonGroup, ElButton } from 'element-plus'
import EditCell from '../EditTable'
import { useTableContext } from '../useTableContext'
import { type Slots, renderSlot } from 'vue'
import { isNumber } from '@/utils/is'
// 渲染图片函数
const renderImage = (row: any, key: string) =>
    h(ElImage, {
        previewTeleported: true,
        hideOnClickModal: true,
        previewSrcList: [row[key]],
        src: row[key],
        fit: 'cover',
        class: 'w-9 h-9 rounded-lg'
    })
// date的渲染函数。 本项目日期是时间戳，这里日期格式化可根据你的项目来更改
const rederDate = (row: any, col: Table.Column, key: string) => {
    // 十位数时间戳
    if (isNumber(row[key]) && String(row[key])?.length <= 10) {
        return h('span', dayjs.unix(row[key]).format(col.dateFormat ?? 'YYYY-MM-DD'))
    }
    // 其他格式的日期
    return h('span', dayjs(row[key]).format(col.dateFormat ?? 'YYYY-MM-DD'))
}
// 按钮组的渲染函数
const rederButtons = (row: any, col: Table.Column, index: number) => {
    const easyTable = useTableContext()
    return h(ElButtonGroup, () =>
        col.buttons?.map((btn) =>
            h(
                ElButton,
                {
                    key: btn.command,
                    size: btn.size,
                    type: btn.type,
                    onClick: () => easyTable.emit('command', btn.command, row, index)
                },
                () => btn.name
            )
        )
    )
}

export function useRenderHelper(slots: Slots) {
    const renderColumn = ({ row, col, $index: index }: Params) => {
        const key = col.prop as string
        // 渲染图片
        if (col.type === 'image') {
            return renderImage(row, key)
        }
        // 格式化日期 (本项目日期是时间戳，这里日期格式化可根据你的项目来更改)
        if (col.type === 'date') {
            return rederDate(row, col, key)
        }
        // 如果传递按钮数组数据，就展示按钮组
        if (col.buttons?.length) {
            return rederButtons(row, col, index)
        }
        // 插槽
        if (col.slot) {
            return h('span', renderSlot(slots, col.slot, { row, index }))
        }
        // 可编辑列
        if (col.editable) {
            return h(EditCell, { row, col, index })
        }
        // 默认内容
        return col.render ? col.render({ row, index }) : h('span', row[key])
    }
    const renderColumnExpand = ({ row, col, $index: index }: Params) => {
        if (col.slot) {
            return h('span', renderSlot(slots, 'expand', { row, index }))
        }
        return col.render
    }
    return { renderColumn, renderColumnExpand }
}
