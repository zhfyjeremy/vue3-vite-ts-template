/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // 自定义主题颜色
                primary: {
                    default: 'var(--primary-color-default)',
                    heavily: 'var(--primary-color-heavily)'
                }
            }
        }
    },
    plugins: [
        function ({ addBase }) {
            addBase({
                '.el-button': {
                    'background-color': 'var(--el-button-bg-color,val(--el-color-white))'
                }
            })
        },
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.flex-center': {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                }
            }

            addUtilities(newUtilities)
        })
    ]
}
