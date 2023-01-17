/**
 * @description 对象数组深克隆
 * @param obj 源对象
 * @returns {obj} 克隆后的对象
 */
export function deepCopy<T>(obj: any): T {
    let newObj: any
    try {
        newObj = obj.push ? [] : {}
    } catch (error) {
        newObj = {}
    }
    for (const attr in obj) {
        if (typeof obj[attr] === 'object') {
            newObj[attr] = deepCopy(obj[attr])
        } else {
            newObj[attr] = obj[attr]
        }
    }
    return newObj
}

/**
 * @description 判断数据类型
 * @param val 需要判断类型的数据
 * @returns {string} 数据类型
 */
export function isType(val: any) {
    if (val === null) return 'null'
    if (typeof val !== 'object') return typeof val
    // eslint-disable-next-line newline-per-chained-call
    return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}
/**
 * @description 生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
export function randomNum(min: number, max: number): number {
    const num = Math.floor(Math.random() * (min - max) + max)
    return num
}

/**
 * @description 获取浏览器默认语言
 * @returns {String} 语言
 */
export function getBrowserLang() {
    const browserLang = navigator.language ? navigator.language : navigator.browserLanguage
    let defaultBrowserLang = ''
    if (
        browserLang.toLowerCase() === 'cn' ||
        browserLang.toLowerCase() === 'zh' ||
        browserLang.toLowerCase() === 'zh-cn'
    ) {
        defaultBrowserLang = 'zh-cn'
    } else {
        defaultBrowserLang = 'en'
    }
    return defaultBrowserLang
}
// 验证是否为blob格式
/**
 * @description 验证是否为blob格式
 * @param data any 需要验证的数据
 * @return {Booleaan} 返回的值
 * */
export async function blobValidate(data: any) {
    try {
        const text = await data.text()
        JSON.parse(text)
        return false
    } catch (error) {
        return true
    }
}

/**
 * @description 格式化数字千分位
 * @param num number 要格式化的数字
 * @return {String} 格式化后的值
 * */
export function formatNumThousands(num: number) {
    const str = num.toString()
    const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    return str.replace(reg, '$1,')
}
