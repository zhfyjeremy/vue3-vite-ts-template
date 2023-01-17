import { resolve } from 'path'
import { AliasOptions } from 'vite'

const alias = {
    '@': resolve(__dirname, '../src'),
    '#': resolve(__dirname, '../types'),
    // 'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
} as AliasOptions

export default alias
