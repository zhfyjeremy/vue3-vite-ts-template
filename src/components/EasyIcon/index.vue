<script lang="ts" setup>
/**
 *  Easy Icon 组件
 *  功能：
 *       1. 支持使用本地src/icons/xxx.svg 本地图标
 *       2. 自动按需引入 iconify 图标
 *  使用方式：
 *       1. 本地使用svg使用 (加载本地svg，一定要加 svg: 前缀表示是本地图标)
 *          'svg:user' user是本地src/icons/user.svg 的文件名
 *        <EasyIcon icon="svg:user"/>
 *       2. 加载iconify图标库 https://icon-sets.iconify.design/
 *          'ep:add-location'是iconify图标库指定的名字
 *        <EasyIcon icon="ep:add-location"/>
 */
import Iconify from './Iconify'
import SvgIcon from './SvgIcon/index.vue'
interface Iprops {
    icon: string
    color?: string
    size?: string | number
}
const props = defineProps<Iprops>()
const isSvgIcon = computed(() => props.icon?.startsWith('svg:'))
</script>
<template>
    <el-icon :size="size" :color="color">
        <SvgIcon :icon-class="icon.slice(4)" :color="color" :size="size" v-if="isSvgIcon" />
        <Iconify :icon="icon" :color="color" :size="size" v-else />
    </el-icon>
</template>
<style lang="scss" scoped></style>
