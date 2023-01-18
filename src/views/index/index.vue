<template>
    <div>
        <p class="text-white text-5xl bg-primary-default py-28 text-center">This is Home view</p>
        <div class="p-10">
            <div class="py-6 border-b">svgIcon: <svg-icon icon-class="loading" /></div>
            <div class="py-6 border-b">
                <el-button @click="handleShowLoading"> Show Loading </el-button>
            </div>
            <div class="py-6 border-b">
                <el-button @click="handleShowMessage"> Show Message </el-button>
            </div>
            <div class="py-6 border-b">
                <el-button @click="handleShowElementMessage"> Element MessageBox </el-button>
            </div>
            <div>
                <p>Element Icons Auto Import</p>
                <el-icon><ElIconPlus /></el-icon>
                <el-icon><ElIconMinus /></el-icon>
                <el-icon><ElIconCirclePlus /></el-icon>
                <pre class="bg-gray-700 text-gray-200 rounded-lg">
                    <code>
                        &lt;el-icon&gt;&lt;ElIconPlus /&gt;&lt;/el-icon&gt;
                        &lt;el-icon&gt;&lt;ElIconMinus /&gt;&lt;/el-icon&gt;
                        &lt;el-icon&gt;&lt;ElIconCirclePlus /&gt;&lt;/el-icon&gt;
                    </code>
                </pre>
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
