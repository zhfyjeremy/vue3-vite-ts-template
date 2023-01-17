/* eslint-disable no-duplicate-imports */
import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import setupPlugins from './vite/plugins'
import { parseEnv } from './vite/util'
import alias from './vite/alias'
import css from './vite/css'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
    const isBuild = command === 'build'
    const env = parseEnv(loadEnv(mode, process.cwd()))
    return {
        base: '/vue3-vite-ts-template',
        resolve: {
            alias
        },
        plugins: [...setupPlugins(isBuild, env)],
        css
    }
})
