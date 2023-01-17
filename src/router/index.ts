import { createRouter, createWebHistory } from 'vue-router'
import routerGuard from './guard'
import { constantRoutes } from './constantRoute'
import { App } from 'vue'
declare module 'vue-router' {
    interface RouteMeta {
        title: string // 标题
        requireAuth?: boolean // 是否验证登录
    }
}
const router = createRouter({
    linkActiveClass: 'router-active',
    history: createWebHistory(),
    routes: constantRoutes
})
// 路由守卫
routerGuard.init(router)
// 注册路由
export function setupRouter(app: App) {
    app.use(router)
}
export default router
