import './index.scss'
import { ElIcon } from 'element-plus'
import { SuccessFilled, CircleCloseFilled, InfoFilled, WarningFilled, Close } from '@element-plus/icons-vue'
import { Transition } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
const messageMaxLength = 8 // 当为toast风格且icon不等于none的情况下最多显示8个字符
function resetOptions(): IEasyMessageOptions {
    return {
        message: '默认提示信息',
        type: 'info',
        duration: 3000,
        style: 'message',
        placement: 'top'
    }
}
export default defineComponent({
    setup(_, { expose }) {
        const isShow = ref(false)
        const defaultOpt = ref<IEasyMessageOptions>(resetOptions())

        const messageClass = computed(() => `easy-message-tsx ${defaultOpt.value.placement} ${defaultOpt.value.style}`)
        const formatToastMsg = computed(() => (msg: string) => {
            if (defaultOpt.value.style === 'message') return
            if (defaultOpt.value.type === 'none') return msg
            if (msg.length > messageMaxLength) return msg.substring(0, messageMaxLength)
            return msg
        })
        let timer: NodeJS.Timeout
        const closeMessage = () => {
            clearTimeout(timer)
            isShow.value = false
            // 关闭后的回调
            defaultOpt.value.onClose && defaultOpt.value.onClose()
        }
        const showMessage = (options: EasyMessageOption, type?: EasyMessageType): IEasyMessageResult => {
            // 展示之前先清除定时器，并关掉之前的弹框
            clearTimeout(timer)
            isShow.value = false
            defaultOpt.value = resetOptions()
            // 如果传入的是字符串就把信息放入到options的message中
            if (typeof options === 'string') {
                options = { message: options }
            }
            defaultOpt.value = { ...defaultOpt.value, ...{ type: type || 'default' }, ...options }
            // 当type等于loading的时候，提示框为不可关闭状态
            defaultOpt.value.duration = defaultOpt.value.type === 'loading' ? 0 : defaultOpt.value.duration
            setTimeout(() => {
                isShow.value = true
            })
            // 如果传入的值为0可以持续保留在页面，需要手动销毁
            if (defaultOpt.value.duration && defaultOpt.value.duration > 0) {
                timer = setTimeout(() => {
                    closeMessage()
                }, defaultOpt.value.duration)
            }
            return closeMessage
        }

        const EasyMessage: IEasyMessage = {
            info(options: EasyMessageOption) {
                return showMessage(options, 'info')
            },
            default(options: EasyMessageOption) {
                return showMessage(options, 'default')
            },
            success(options: EasyMessageOption) {
                return showMessage(options, 'success')
            },
            error(options: EasyMessageOption) {
                return showMessage(options, 'error')
            },
            warning(options: EasyMessageOption) {
                return showMessage(options, 'warning')
            },
            loading(options: EasyMessageOption) {
                return showMessage(options, 'loading')
            },
            none(options: EasyMessageOption) {
                return showMessage(options, 'none')
            }
        }
        expose({
            isShow: isShow.value,
            EasyMessage,
            closeMessage,
            showMessage
        })
        // animate__zoomIn
        const renderMessage = () => (
            <div class={messageClass.value}>
                <div class="message-content">
                    <ElIcon v-show={defaultOpt.value.type !== 'none' && defaultOpt.value.type !== 'loading'} size={18}>
                        <SuccessFilled color="var(--el-color-success)" v-show={defaultOpt.value.type === 'success'} />
                        <InfoFilled color="#2080f0" v-show={defaultOpt.value.type === 'info'} />
                        <InfoFilled color="var(--el-color-info)" v-show={defaultOpt.value.type === 'default'} />
                        <WarningFilled color="var(--el-color-warning)" v-show={defaultOpt.value.type === 'warning'} />
                        <CircleCloseFilled color="var(--el-color-danger)" v-show={defaultOpt.value.type === 'error'} />
                    </ElIcon>
                    <ElIcon
                        size={18}
                        class="is-loading"
                        color="var(--el-color-primary)"
                        v-show={defaultOpt.value.type === 'loading'}>
                        <SvgIcon iconClass="loading" />
                    </ElIcon>
                    <span class="ml-1">{defaultOpt.value.message}</span>
                    <ElIcon
                        onClick={closeMessage}
                        size={18}
                        v-show={(defaultOpt.value?.duration as number) <= 0 && defaultOpt.value.type !== 'loading'}
                        class="ml-2 cursor-pointer"
                        color="#bdc3c7">
                        <Close />
                    </ElIcon>
                </div>
            </div>
        )
        const renderToastMessage = () => (
            <div class={messageClass.value}>
                <div class="toast-content">
                    <div class="flex flex-col items-center flex-1">
                        <div class="py-3" v-show={defaultOpt.value.type !== 'none'}>
                            <ElIcon
                                v-show={defaultOpt.value.type !== 'none' && defaultOpt.value.type !== 'loading'}
                                size={40}
                                color="#fff">
                                <SuccessFilled v-show={defaultOpt.value.type === 'success'} />
                                <InfoFilled v-show={defaultOpt.value.type === 'info'} />
                                <WarningFilled v-show={defaultOpt.value.type === 'warning'} />
                                <CircleCloseFilled v-show={defaultOpt.value.type === 'error'} />
                            </ElIcon>
                            <ElIcon
                                class="is-loading"
                                color="#fff"
                                size={40}
                                v-show={defaultOpt.value.type === 'loading'}>
                                <SvgIcon size={40} iconClass="loading" />
                            </ElIcon>
                        </div>
                        <span>{formatToastMsg.value(defaultOpt.value.message as string)}</span>
                    </div>

                    <ElIcon
                        onClick={closeMessage}
                        size={18}
                        v-show={(defaultOpt.value?.duration as number) <= 0 && defaultOpt.value.type === 'none'}
                        class="ml-2 cursor-pointer"
                        color="#bdc3c7">
                        <Close />
                    </ElIcon>
                </div>
            </div>
        )
        return () => (
            <Transition
                v-show={isShow.value}
                enterActiveClass={`animate__animated ${
                    defaultOpt.value.placement === 'center' ? 'animate__zoomIn' : 'animate__fadeInDown'
                }`}
                leaveActiveClass="animate__animated animate__fadeOutUp">
                {defaultOpt.value.style === 'message' ? renderMessage() : renderToastMessage()}
            </Transition>
        )
    }
})
