<template>
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Suspense>
                <component :is="Component"></component>
            </Suspense>
        </template>
    </RouterView>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
