<template>
    <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
            <component :is="Component" :key="route.fullPath" />
        </template>
    </RouterView>
</template>
<script lang="ts" setup></script>
