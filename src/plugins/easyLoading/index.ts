import { App } from 'vue'
import easyLoading from '@/components/EasyLoading'
export default (app: App) => {
    app.use(easyLoading)
}
