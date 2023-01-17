import './index.scss'
export default defineComponent({
    props: {
        message: String
    },
    setup(props) {
        return () => (
            <div class="easy-loading">
                <div class="content">
                    <div class="loading">
                        <div class="dot white"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <div class="message">{props.message}</div>
                </div>
            </div>
        )
    }
})
