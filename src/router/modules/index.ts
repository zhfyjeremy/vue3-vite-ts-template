import { RouteRecordRaw } from 'vue-router'
const routerModule: Record<string, any> = import.meta.glob('./**.ts', { eager: true })
const modules: RouteRecordRaw[] = []
for (const item of Object.values(routerModule)) {
    modules.push(...item.default)
}
export default modules
