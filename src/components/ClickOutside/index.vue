<template>
    <div ref="target" class="w-full">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits(['mounted', 'clickOutside'])
const target = ref<HTMLElement>()
onClickOutside(target, (event: MouseEvent) => {
    if (props.disabled) return
    emit('clickOutside', event)
})

onMounted(() => {
    emit('mounted')
})
</script>
<style lang="scss" scoped></style>
