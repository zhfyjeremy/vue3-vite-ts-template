<template>
    <div class="flex-center p-40">
        <el-button class="w-24" type="primary" @click="handleLogin">登 录</el-button>
    </div>
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
