import type { Component } from 'vue'
import { ElInput, ElSwitch, ElInputNumber, ElDatePicker, ElTimePicker } from 'element-plus'
import EasySelect from '@/components/EasySelect/index.vue'
const componentMap = new Map<Table.ComponentType, Component>()
componentMap.set('Input', ElInput)
componentMap.set('Switch', ElSwitch)
componentMap.set('InputNumber', ElInputNumber)
componentMap.set('Select', EasySelect)
componentMap.set('DatePicker', ElDatePicker)
componentMap.set('TimePicker', ElTimePicker)
export { componentMap }
