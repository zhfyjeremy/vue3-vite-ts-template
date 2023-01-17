import { App } from 'vue'
import piniaStore from '@/store'
export default (app: App) => {
    app.use(piniaStore)
}
