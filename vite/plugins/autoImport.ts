import AutoImport from 'unplugin-auto-import/vite'
import { PluginOption } from 'vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// element icons auto import
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// 自动导入插件
export default (plugins: PluginOption[]) => {
    plugins.push(
        AutoImport({
            imports: [
                // presets
                'vue',
                'vue-router',
                'pinia',
                { 'element-plus': ['ElLoading', 'ElMessage', 'ElMessageBox', 'ElNotification'] }
            ],
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
                globalsPropValue: true
            },
            resolvers: [
                ElementPlusResolver({
                    // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用ElMessage，ElNotification等组件时默认的主题色会覆盖自定义的主题色
                    importStyle: 'sass'
                }),
                // Auto import icon components
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon'
                })
            ],
            dts: 'types/auto-imports.d.ts'
        }),
        Components({
            dirs: ['src/components'], // 按需加载的文件夹
            resolvers: [
                // Auto register icon components
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['el']
                }),
                ElementPlusResolver({
                    // 自动引入修改主题色添加这一行，使用预处理样式
                    importStyle: 'sass'
                })
            ],
            dts: 'types/components.d.ts' // components.d.ts文件的路径
        }),
        Icons({
            autoInstall: true
        }),
        ElementPlus({
            useSource: true
            // defaultLocale: 'zh-cn'
        })
    )
}
