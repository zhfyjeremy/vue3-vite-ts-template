import { App } from 'vue'
import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from '@/components/SvgIcon/index.vue' // 引入组件

export default (app: App) => {
    // 注册SvgIcon组件
    app.component('svg-icon', SvgIcon)
}
