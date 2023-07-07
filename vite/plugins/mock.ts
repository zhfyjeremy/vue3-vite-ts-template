import { Plugin } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { ImportMetaEnv } from '../../types/viteEnv'
// mockJs测试数据插件
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
    if (env.VITE_MOCK_ENABLE) {
        plugins.push(
            viteMockServe({
                ignore: /^\_/,
                localEnabled: !isBuild,
                prodEnabled: isBuild,
                injectCode: `
                    import { setupProdMockServer } from '../mock/_mockProdServer';
                    setupProdMockServer();
                `,
                logger: true
            })
        )
    }
}
