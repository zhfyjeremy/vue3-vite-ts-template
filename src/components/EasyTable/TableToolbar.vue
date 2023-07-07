<template>
    <div class="flex justify-between mb-3 items-center">
        <div><slot name="extra" /></div>
        <div class="flex items-center">
            <el-tooltip content="尺寸" placement="top">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span>
                        <SvgIcon icon-class="size" :size="20" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :class="{ active: modelValue === 'large' }" command="large"
                                >大</el-dropdown-item
                            >
                            <el-dropdown-item :class="{ active: modelValue === 'default' }" command="default"
                                >中</el-dropdown-item
                            >
                            <el-dropdown-item :class="{ active: modelValue === 'small' }" command="small"
                                >小</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-tooltip>
            <el-tooltip content="刷新" placement="top">
                <el-icon class="ml-3 cursor-pointer" @click="emit('refresh')" :size="22"><Refresh /></el-icon>
            </el-tooltip>
            <!-- <el-tooltip content="全屏" placement="top">
                <span v-if="isFullscreen" class="flex-inline w-5 h-5 ml-3">
                    <SvgIcon icon-class="close-fullScreen" @click="emit('changeScreen')" :size="18" />
                </span>
                <el-icon v-else class="ml-3 cursor-pointer" @click="emit('changeScreen')" :size="20"
                    ><FullScreen
                /></el-icon>
            </el-tooltip> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { Refresh } from '@element-plus/icons-vue'
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
