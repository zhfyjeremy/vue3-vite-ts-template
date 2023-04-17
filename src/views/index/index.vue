<template>
    <div>
        <p class="text-white text-5xl bg-primary-default py-28 text-center">This is Home view</p>
        <div class="p-10">
            <div class="py-6 border-b">
                <el-button @click="handleShowLoading"> Show Loading </el-button>
            </div>
            <div class="py-6 border-b">
                <el-button @click="handleShowMessage"> Show Message </el-button>
            </div>
            <div class="py-6 border-b">
                <el-button @click="handleShowElementMessage"> Element MessageBox </el-button>
            </div>
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
