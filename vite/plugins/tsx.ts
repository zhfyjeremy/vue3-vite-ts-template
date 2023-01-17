import { Plugin } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// vue框架
export default (plugins: Plugin[]) => {
    plugins.push(vueJsx())
}
