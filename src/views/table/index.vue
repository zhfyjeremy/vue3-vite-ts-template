<script lang="ts" setup>
import { type TabsPaneContext } from 'element-plus'

const [route, router] = [useRoute(), useRouter()]
const activeName = (route.name as string) || 'table.base'
const handleClick = (tab: TabsPaneContext) => {
    router.replace({ name: tab.paneName as string })
}
</script>
<template>
    <div class="p-5">
        <el-card class="mb-5">
            <template #header>
                <div class="card-header">
                    vue3 ts element plus
                    table表格二次封装详细步骤。支持单元格内容、表头自定义渲染（支持使用作用域插槽、tsx 语法、h 函数）
                </div>
            </template>
            <div class="mb-5">
                <el-link
                    type="primary"
                    href="https://blog.csdn.net/weixin_45291937/article/details/125523244"
                    target="_blank">
                    可参考CSDN中的参数介绍
                </el-link>
            </div>
            <p class="text-sm text-gray-500">也可以参考 @/components/table/doc.md 中的参数介绍</p>
        </el-card>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="基本表格" name="table.base" />
            <el-tab-pane label="分页表格" name="table.pagination" />
            <el-tab-pane label="展开行" name="table.expand" />
            <el-tab-pane label="开启搜索" name="table.search" />
            <el-tab-pane label="多级表头" name="table.groupHead" />
        </el-tabs>
        <div class="min-h-[500px]">
            <router-view />
        </div>
    </div>
</template>
