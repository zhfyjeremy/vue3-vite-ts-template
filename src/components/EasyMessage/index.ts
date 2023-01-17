import { createVNode, render, VNode, App } from 'vue'
import EasyMessageComponent from './src/index'
import { I$EasyMessage } from '@/plugins'
// dom容器
const div = document.createElement('div')
div.setAttribute('class', 'easy-message-container')
document.body.appendChild(div)
const vNode: VNode = createVNode(EasyMessageComponent)
render(vNode, div)

const install = (app: App) => {
    // Vue 提供的全局配置 可以自定义
    app.config.globalProperties.$easyMessage = {
        ...vNode.component?.exposed?.EasyMessage,
        closeMessage: () => vNode.component?.exposed?.closeMessage(),
        config: (options: EasyMessageOption) => vNode.component?.exposed?.showMessage(options),
        isShow: vNode.component?.exposed?.isShow
    }
}
const EasyMessage: I$EasyMessage = {
    ...vNode.component?.exposed?.EasyMessage,
    closeMessage: () => vNode.component?.exposed?.closeMessage(),
    config: (options: EasyMessageOption) => vNode.component?.exposed?.showMessage(options),
    isShow: vNode.component?.exposed?.isShow
}
export { install as default, EasyMessage }
