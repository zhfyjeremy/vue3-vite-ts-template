import http from '@/service/request'

/**
 * 登录
 * data ILoginParams
 * 第三个参数非必填， 请求接口时是否展示loading showLoading: false，请求接口成功后是否显示提示信息 showMessage: false
 * @returns  IToken
 */
export function login(data: ILoginParams) {
    return http.post<string>('/api/user/login', data, { showLoading: false })
}
