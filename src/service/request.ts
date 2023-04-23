/* eslint-disable lines-around-comment */
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import { checkStatus } from './helper/checkStatus'
import { ResultEnum } from '@/enums/httpEnum'
import { getToken } from '@/utils/auth'
import router from '@/router'
import { useUserStore } from '@/store'

const config = {
    // 默认地址
    baseURL: import.meta.env.VITE_API_BASEURL, // API 请求的默认前缀
    // 设置超时时间（10s）
    timeout: ResultEnum.TIMEOUT as number,
    // 跨域时候允许携带凭证
    withCredentials: false
}
// 继承 AxiosRequestConfig，自定义的配置项用来封装自己要的功能
interface IRequestConfig extends AxiosRequestConfig {
    isReturnAllResult?: boolean // 是否返回所有的数据，无论状态码是多少
    showLoading?: boolean
    showMessage?: boolean
}
const IS_SHOW_LOADING = true // 发出请求后显示正在加载的动画 - 默认显示
const IS_SHOW_MSG = false // 请求成功后是否显示提示语 - 默认不显示
const IS_RETURN_ALL_RESULT = false // 是否返回所有的数据，无论状态码是多少 - 默认不返回所有
class RequestHttp {
    private service: AxiosInstance
    private showLoading = IS_SHOW_LOADING
    private showMessage = IS_SHOW_MSG
    private isReturnAllResult = IS_RETURN_ALL_RESULT
    public constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config)
        this.init()
    }
    private init() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }
    private interceptorsRequest() {
        /**
         * @description 请求拦截器
         */
        this.service.interceptors.request.use(
            (config: IRequestConfig) => {
                // 应用加载文案
                this.showLoading = config.showLoading ?? IS_SHOW_LOADING
                this.showMessage = config.showMessage ?? IS_SHOW_MSG
                this.isReturnAllResult = config.isReturnAllResult ?? IS_RETURN_ALL_RESULT
                this.showLoading && showFullScreenLoading()
                const token = getToken()
                // 注意： 如果项目中不是使用JWT验证token方式， 需自行更改一下headers配置
                return { ...config, headers: { Authorization: `Bearer ${token}` || '' } }
            },
            (error: AxiosError) => Promise.reject(error)
        )
    }
    private interceptorsResponse() {
        /**
         * @description 响应拦截器
         */
        this.service.interceptors.response.use(
            async (response: AxiosResponse) => {
                // 每次请求之后设置默认显式 loading
                this.showLoading = IS_SHOW_LOADING
                const { data } = response
                const userStore = useUserStore()
                tryHideFullScreenLoading()
                // 如果指定了isCallbackAll， 则直接返回所有数据
                if (this.isReturnAllResult) {
                    return Promise.resolve(data)
                }
                // 如果token发生了变更，返回401， 清除token跳转到登录页面
                if (data.code === ResultEnum.OVERDUE) {
                    await userStore.resetToken()
                    router.replace({ name: 'login' })
                    ElMessage.error(data.msg)
                    return Promise.reject(data)
                }
                // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
                if (data.code !== ResultEnum.SUCCESS) {
                    ElMessage.error(data.msg)
                    return Promise.reject(data)
                }
                // 是否显示msg
                this.showMessage && ElMessage.success(data.msg)
                // 成功请求
                this.showLoading = IS_SHOW_LOADING
                this.showMessage = IS_SHOW_MSG
                this.isReturnAllResult = IS_RETURN_ALL_RESULT
                // 注意： 这里直接返回的是data.data, 所以数据格式一定要和后台约定好，所有的数据都需要放在data中。 如果返回格式不一致，可自行调整
                return Promise.resolve(data.data)
            },
            (error: AxiosError) => {
                const { response } = error
                tryHideFullScreenLoading()
                // 每次请求之后设置默认显式 loading
                this.showLoading = IS_SHOW_LOADING
                this.showMessage = IS_SHOW_MSG
                this.isReturnAllResult = IS_RETURN_ALL_RESULT
                // 根据响应的错误状态码，做不同的处理
                if (response) checkStatus(response)
                // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
                if (!window.navigator.onLine) router.replace({ path: '/500' })
                return Promise.reject(error)
            }
        )
    }

    // 常用请求方法封装
    get<T>(url: string, params?: object, config?: IRequestConfig): Promise<T> {
        return this.service.get(url, { params, ...config })
    }
    post<T>(url: string, params?: object, config?: IRequestConfig): Promise<T> {
        return this.service.post(url, params, config)
    }
    put<T>(url: string, params?: object, config?: IRequestConfig): Promise<T> {
        return this.service.put(url, params, config)
    }
    delete<T>(url: string, params?: any, config?: IRequestConfig): Promise<T> {
        return this.service.delete(url, { params, ...config })
    }
}

export default new RequestHttp(config)
