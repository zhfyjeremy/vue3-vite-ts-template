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
                    table基本封装 CSDN
                </el-link>
            </div>
            <p class="text-sm text-gray-500">也可以参考 @/components/table/doc.md 中的参数介绍</p>
            <div class="bg-gray-100 py-3 px-5 mt-4 rounded-md text-xs text-gray-500">
                <p class="mb-1.5">template_phase_1.0分支： 使用 tempalte 封装, 最基本的功能，代码简单，方便自己扩展</p>
                <p class="mb-1.5">
                    template_phase_2.0分支： 使用 tempalte 封装, 在1.0 基础上做了优化。在编码时更好的类型支持，支持原
                    element table 的属性和方法，并新增部分参数和事件。具体可查看文档 @/components/table/doc.md
                </p>
                <p>master分支： 使用 h 函数封装，功能有搜索， 编辑单元格等</p>
            </div>
        </el-card>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="基本表格" name="table.base" />
            <el-tab-pane label="分页表格" name="table.pagination" />
            <el-tab-pane label="展开行" name="table.expand" />
            <el-tab-pane label="开启搜索" name="table.search" />
            <el-tab-pane label="多级表头" name="table.groupHead" />
            <el-tab-pane label="编辑单元格" name="table.editCell" />
        </el-tabs>
        <div class="min-h-[500px]">
            <router-view />
        </div>
    </div>
</template>
