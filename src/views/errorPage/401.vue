<script lang="ts" setup></script>
<template>
    <div class="flex-center flex-col md:flex-row h-screen">
        <div class="p-5">
            <h1 class="text-6xl text-primary-default mb-8">糟糕！</h1>
            <h2 class="text-3xl text-gray-700 dark:text-gray-300 mb-3">您没有权限去该页面</h2>
            <p class="text-gray-400 text-sm mb-3">请确认您当前的权限，或者点击下方的按钮返回首页</p>
            <router-link replace :to="{ name: 'home' }">
                <ElButton type="primary">返回首页</ElButton>
            </router-link>
        </div>
        <div>
            <svg-icon size="400" icon-class="401" />
        </div>
    </div>
</template>
<style lang="scss" scoped></style>
