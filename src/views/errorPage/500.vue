<script lang="ts" setup>
const handleRefresh = () => {
    location.reload()
}
</script>
<template>
    <div class="flex-center flex-col md:flex-row h-screen">
        <div>
            <easy-icon size="400" icon="svg:500" />
        </div>
        <div class="p-5">
            <h1 class="text-6xl text-primary-default mb-8">糟糕！</h1>
            <h2 class="text-3xl text-gray-700 dark:text-gray-300 mb-3">似乎断网了。</h2>
            <p class="text-gray-400 text-sm mb-3">请检查您的网络环境，或者点击下方的按钮刷新</p>
            <ElButton type="primary" @click="handleRefresh">刷新</ElButton>
            <router-link replace :to="{ name: 'home' }" class="ml-4">
                <ElButton type="primary" plain>返回首页</ElButton>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>
