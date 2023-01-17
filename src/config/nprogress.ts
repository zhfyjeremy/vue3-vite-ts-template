import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'linear', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 300, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
})
export default NProgress
