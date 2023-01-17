import { getToken, removeToken, setToken } from '@/utils/auth'
import { Names } from '@/store/store-namespace'
const resetState = (): UserState => ({
    userInfo: null,
    userName: '',
    token: getToken(),
    roles: []
})
export const useUserStore = defineStore(Names.useUserStore, {
    state: (): UserState => resetState(),
    actions: {
        // Login
        _login(): Promise<void> {
            return new Promise((resolve) => {
                setToken('template-token')
                this.token = 'template-token'
                resolve()
            })
        },
        // Get UserInfo
        _getUserInfo() {
            this.userName = 'hehe'
        },
        // Logout
        _logout(): Promise<void> {
            return new Promise((resolve) => {
                this.resetToken().then(() => {
                    resolve()
                })
            })
        },
        // Remove Token
        resetToken(): Promise<void> {
            return new Promise<void>((resolve) => {
                removeToken()
                this.$state = resetState()
                resolve()
            })
        }
    }
})
