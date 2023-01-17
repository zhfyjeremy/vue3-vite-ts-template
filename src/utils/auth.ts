import Cookies from 'js-cookie'

const TokenKey = 'vue3_template_token'

export function getToken(): string {
    return Cookies.get(TokenKey) || ''
}

export function setToken(token: string): void {
    Cookies.set(TokenKey, token, { expires: 7 })
}

export function removeToken(): void {
    Cookies.remove(TokenKey)
}

