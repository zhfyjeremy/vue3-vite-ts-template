import { createVNode, render, VNode, App } from 'vue'
import EasyLoading from './src/index'

const showLoading = (message?: string) => {
    const vNode: VNode = createVNode(EasyLoading, { message })
    render(vNode, document.body)
}
const hideLoading = () => {
    render(null, document.body)
}

export default {
    install(app: App) {
        // Vue 提供的全局配置 可以自定义
        app.config.globalProperties.$easyLoading = {
            showLoading,
            hideLoading
        }
    },
    showLoading,
    hideLoading
}
