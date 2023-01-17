import { resolve } from 'path'
import { Plugin } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default (plugins: Plugin[]) => {
    plugins.push(
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [resolve(process.cwd(), 'src/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
        })
    )
}
