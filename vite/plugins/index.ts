import { Plugin } from 'vite'
import autoImport from './autoImport'
import setupVue from './vue'
import setupSvgIconplugin from './svgIcon'
import setupTsx from './tsx'
import { ImportMetaEnv } from '../../types/viteEnv'
const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
    console.log('isBuild-env', isBuild, env)
    setupVue(plugins)
    setupTsx(plugins)
    autoImport(plugins)
    setupSvgIconplugin(plugins)
    return plugins
}
