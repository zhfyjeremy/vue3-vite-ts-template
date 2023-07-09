<template>
    <div class="flex justify-between mb-3 items-center">
        <div><slot name="extra" /></div>
        <div class="flex items-center">
            <el-tooltip content="尺寸" placement="top">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span>
                        <easy-icon icon="svg:size" :size="20" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :class="{ active: modelValue === 'large' }" command="large"
                                >宽松</el-dropdown-item
                            >
                            <el-dropdown-item :class="{ active: modelValue === 'default' }" command="default"
                                >默认</el-dropdown-item
                            >
                            <el-dropdown-item :class="{ active: modelValue === 'small' }" command="small"
                                >紧凑</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-tooltip>
            <el-tooltip content="刷新" placement="top">
                <div class="ml-3 cursor-pointer flex-center" @click="emit('refresh')">
                    <easy-icon :size="20" icon="ep:refresh" />
                </div>
            </el-tooltip>
            <el-tooltip content="全屏" placement="top" v-if="false">
                <div @click="emit('changeScreen')" class="ml-3 cursor-pointer flex-center">
                    <easy-icon :icon="isFullscreen ? 'svg:close-fullScreen' : 'ep:full-screen'" :size="18" />
                </div>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
export type TableSize = 'large' | 'default' | 'small'
interface IProps {
    modelValue: string
    isFullscreen: boolean
}
defineProps<IProps>()
const emit = defineEmits(['refresh', 'update:modelValue', 'changeScreen'])
const handleCommand = (command: TableSize) => {
    emit('update:modelValue', command)
}
</script>

<style lang="scss">
.active {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
}
</style>
