<template>
    <svg
        aria-hidden="true"
        class="svg-icon"
        :style="{ 'font-size': parseInt(size as string) + 'px' }"
    >
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
interface Props {
    iconClass: string
    color?: string
    size?: string | number
}

const props = withDefaults(defineProps<Props>(), { size: 16 })
const symbolId = computed(() => `#icon-${props.iconClass}`)
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    fill: currentColor;
    display: inline;
}
</style>
