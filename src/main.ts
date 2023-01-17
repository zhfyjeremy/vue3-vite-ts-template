import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import plugins from '@/plugins'
import '@/styles/index.scss'
const app = createApp(App)
function bootstrap() {
    plugins(app)
    setupRouter(app)
    app.mount('#app')
}
void bootstrap()
