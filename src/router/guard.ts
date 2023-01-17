import { useUserStore } from '@/store'
import { AxiosCanceler } from '@/service/helper/axiosCancel'
import { Router } from 'vue-router'
import NProgress from '@/config/nprogress'
import whiteList from '@/config/whiteList'
import { changeTitle } from '@/utils/changeTitle'
import EasyLoading from '@/components/EasyLoading'
// 生产环境下页面初次渲染， 加载loading
if (import.meta.env.MODE === 'production') {
    EasyLoading.showLoading('Easy Admin')
}
// 动态添加路由
export default class RouterPermission {
    static init(router: Router) {
        // 全局前置守卫：初始化时执行、每次路由切换前执行
        router.beforeEach(async (to, from, next) => {
            NProgress.start()
            const userStore = useUserStore()
            const axiosCanceler = new AxiosCanceler()
            // 在跳转路由之前，清除所有的请求
            axiosCanceler.removeAllPending()
            const { token } = userStore
            // 判断用户是否登录
            if (!token) {
                // 判断当前路由是否需要登录
                if (whiteList.includes(to.path)) return next() // 放行
                // 判断是否需要登录权限
                if (to.path.includes('/redirect/')) next()
                else next(`/login?redirect=${to.path}`)
                NProgress.done()
                return
            }
            // 已经登录过，访问login路径，重定向到首页
            if (to.path === '/login') {
                next({ path: '/' })
                NProgress.done()
                return
            }
            // 如果没有用户信息,获取用户信息
            try {
                if (!userStore.userName) await userStore._getUserInfo()
                // 正常放行
                next()
            } catch (error) {
                await userStore.resetToken()
                next(`/login?redirect=${to.path}`)
                NProgress.done()
            }
        })

        // 全局后置守卫：初始化时执行、每次路由切换后执行
        router.afterEach((to) => {
            NProgress.done()
            EasyLoading.hideLoading()
            // 设置页面title。防止路由跳转失败的可能，建议在路由切换完成后再设置title
            changeTitle(to.meta.title)
        })
    }
}
