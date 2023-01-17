<template>
    <div class="h-[500px]">
        <p class="bg-primary-default">首页</p>
        <hr class="py-4" />
        <p>svgIcon: <svg-icon icon-class="loading" /></p>
        <hr class="py-4" />
        <el-button @click="handleShowLoading"> Show Loading </el-button>
        <hr class="py-4" />
        <el-button @click="handleShowMessage"> Show Message </el-button>

        <hr class="py-4" />
        <el-button @click="handleShowElementMessage"> Element MessageBox </el-button>
        <hr class="py-4" />
        <div>
            <p>Element Icons Auto Import</p>
            <el-icon><ElIconPlus /></el-icon>
            <el-icon><ElIconMinus /></el-icon>
            <el-icon><ElIconCirclePlus /></el-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import easyLoading from '@/components/EasyLoading'
import { EasyMessage } from '@/components/EasyMessage'
const handleShowLoading = () => {
    easyLoading.showLoading('加载中，请稍后...')

    setTimeout(() => {
        easyLoading.hideLoading()
    }, 3000)
}
const handleShowMessage = () => {
    EasyMessage.info('自定义提示消息')
}
const handleShowElementMessage = () => {
    ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
    })
        .then(() => {
            ElMessage({
                type: 'success',
                message: 'Delete completed'
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled'
            })
        })
}
</script>
<style lang="scss" scoped></style>
