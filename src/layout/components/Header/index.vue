<template>
    <header class="h-16 bg-gray-300 flex-center">
        <router-link class="mr-4" to="/">Home</router-link>
        <router-link class="mr-4" to="/about">About</router-link>
        <router-link class="mr-4" to="/table">Table</router-link>
        <router-link class="mr-4" to="/form">Form</router-link>
        <router-link class="mr-4" to="/icon">Icon</router-link>
        <div class="ml-10">
            <span v-if="userName">{{ userName }}</span>
            <span v-else class="text-sm text-gray-500 cursor-pointer hover:text-red-500" @click="router.push('/login')"
                >还未登录?立即登录</span
            >
            <span
                @click="handleLogout"
                class="ml-4 text-gray-500 text-sm cursor-pointer hover:text-primary-default"
                v-if="userName">
                Logout
            </span>
        </div>
        <div class="ml-10">
            <a href="https://gitee.com/zhfyjeremy/vue3-vite-ts-template" target="_blank">
                <el-button type="danger">Gitee</el-button>
            </a>
            <a class="ml-3" href="https://github.com/zhfyjeremy/vue3-vite-ts-template" target="_blank">
                <el-button type="primary">Github</el-button>
            </a>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store'
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
const router = useRouter()
const handleLogout = () => {
    userStore._logout().then(() => {
        router.push('/login')
    })
}
</script>
<style lang="scss" scoped></style>
