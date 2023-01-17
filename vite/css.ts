import { CSSOptions } from 'vite'
const css = {
    preprocessorOptions: { scss: { additionalData: '@use "@/styles/element/index.scss" as *;' } },
} as CSSOptions
export default css
