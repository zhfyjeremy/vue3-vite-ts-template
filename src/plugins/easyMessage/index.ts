import { App } from 'vue'
import easyMessage from '@/components/EasyMessage'
export default (app: App) => {
    app.use(easyMessage)
}
