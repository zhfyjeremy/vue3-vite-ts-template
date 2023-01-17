<template>
    <el-button type="primary" @click="handleLogin">登录</el-button>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const handleLogin = () => {
    const { redirect } = route.query
    userStore._login().then(() => {
        router.push({ path: (redirect as string) || '/' })
    })
}
</script>
<style lang="scss" scoped></style>
