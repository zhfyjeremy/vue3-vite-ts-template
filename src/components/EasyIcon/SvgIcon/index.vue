<template>
    <svg aria-hidden="true" class="svg-icon" :style="{ 'font-size': iconSize }">
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

const iconSize = computed(() => `${parseInt(props.size.toString())}px`)
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    fill: currentColor;
    display: inline;
    padding: 1px;
}
</style>
